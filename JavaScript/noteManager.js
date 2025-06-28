YhLightApp.noteManager = {
    _contentEleme: () => document.body.querySelector(".note-contain"),
    _sectionEleme: () => document.body.querySelector(".notes-section"),
    _searchInput: () => document.body.querySelector(".search-box input"),
    _searchButton: () => document.body.querySelector(".search-box button"),
    _noteDetailPage: () => document.body.querySelector(".note-detail-page"),
    _buttongroud: () => document.body.querySelector(".buttongroud"),
    _pageButtonGroud: () => document.body.querySelector(".pagebuttongroud"),
    _prevButton: () => document.body.querySelector(".buttongroud .prev"),
    _nextButton: () => document.body.querySelector(".buttongroud .next"),
    _currentPage: 1,
    _currentKeyword: "",
    _notesPerPage: 8,
    _highlightIndex: null,
    _highlightCard: null,
    _highlightCardIndex: null,

    init: function () {
        YhLightApp.noteManager._searchEvent();
        YhLightApp.noteManager._renderCard();
        YhLightApp.noteManager._statCount();
    },

    _statCount: function () {
        YhLightApp.noteManager._contentEleme().querySelectorAll(".stat-item .count")[0].textContent = YhLightApp._metaData.noteMetaData.length;
        YhLightApp.noteManager._contentEleme().querySelectorAll(".stat-item .count")[1].textContent = YhLightApp._metaData.excerptMetaData.length;
        YhLightApp.noteManager._contentEleme().querySelectorAll(".stat-item .count")[2].textContent = YhLightApp._metaData.projectMetaData.length;
    },

    _searchEvent: function () {
        YhLightApp.noteManager._searchInput().addEventListener("input", () => {
            YhLightApp.noteManager._currentKeyword = YhLightApp.noteManager._searchInput().value.trim().toLowerCase();
            YhLightApp.noteManager._currentPage = 1;
            YhLightApp.noteManager._renderCard();
        });

        YhLightApp.noteManager._searchButton().addEventListener("click", () => {
            YhLightApp.noteManager._searchInput().dispatchEvent(new Event("input", { bubbles: true }));
        });
    },

    _getFilteredNotes: function () {
        const noteCards = YhLightApp._metaData.noteMetaData;
        if (!YhLightApp.noteManager._currentKeyword) return noteCards;
        return noteCards.filter(noteCard =>
            noteCard.title.toLowerCase().includes(YhLightApp.noteManager._currentKeyword)
        );
    },

    _renderCard: function () {
        if (YhLightApp.noteManager._highlightIndex != null) {
            YhLightApp.noteManager._currentPage = Math.floor(YhLightApp.noteManager._highlightIndex / this._notesPerPage) + 1;
        }
        const data = YhLightApp.noteManager._getFilteredNotes();
        const totalPages = Math.ceil(data.length / YhLightApp.noteManager._notesPerPage);
        YhLightApp.noteManager._sectionEleme().innerHTML = "";

        const currendFirstCard = (YhLightApp.noteManager._currentPage - 1) * YhLightApp.noteManager._notesPerPage;
        const sliceCards = data.slice(currendFirstCard, currendFirstCard + YhLightApp.noteManager._notesPerPage);

        sliceCards.forEach((note, index) => {
            const card = document.createElement("div");
            card.classList.add("note-card", "fade-in");
            card.innerHTML = `
                <h3 class="note-title">${note.title}</h3>
                <p class="preface">${note.preface}</p>
                <div class="note-time">${note.time}</div>
                <a href="${note.href}" style="display: none;"></a>
            `;
            if (YhLightApp.noteManager._highlightIndex === currendFirstCard + index) {
                card.classList.add("highlight");
                YhLightApp.noteManager._highlightCard = card;
                YhLightApp.noteManager._highlightCardIndex = index;
            }
            card.addEventListener("click", () => YhLightApp.noteManager._showDetail(card));
            YhLightApp.noteManager._sectionEleme().appendChild(card);
        });
        if (YhLightApp.noteManager._highlightCard) {
            setTimeout(() => {
                YhLightApp.noteManager._highlightCard.scrollIntoView({ behavior: "smooth", block: "center" });
            }, 100);
        }
        YhLightApp.noteManager._renderPageButton(totalPages);
    },

    clearHighLight: function () {
        if (YhLightApp.noteManager._highlightCard) {
            YhLightApp.noteManager._highlightCard.classList.remove("highlight");
            YhLightApp.noteManager._highlightIndex = null;
            YhLightApp.noteManager._highlightCard = null;
            YhLightApp.noteManager._highlightCardIndex = null;
        }
    },

    _renderPageButton: function (totalPages) {
        const group = YhLightApp.noteManager._pageButtonGroud();
        group.innerHTML = "";

        const createBtn = (num) => {
            const btn = document.createElement("button");
            btn.textContent = num;
            btn.classList.toggle("active", num === YhLightApp.noteManager._currentPage);
            btn.addEventListener("click", () => {
                YhLightApp.noteManager.clearHighLight();
                YhLightApp.noteManager._currentPage = num;
                YhLightApp.noteManager._renderCard();
            });
            return btn;
        };

        const createOmit = () => {
            const omit = document.createElement("button");
            omit.textContent = "...";
            omit.disabled = true;
            return omit;
        };

        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) group.appendChild(createBtn(i));
        } else {
            if (YhLightApp.noteManager._currentPage <= 3) {
                for (let i = 1; i <= 5; i++) group.appendChild(createBtn(i));
                group.appendChild(createOmit());
                group.appendChild(createBtn(totalPages));
            } else if (YhLightApp.noteManager._currentPage >= totalPages - 2) {
                group.appendChild(createBtn(1));
                group.appendChild(createOmit());
                for (let i = totalPages - 4; i <= totalPages; i++) group.appendChild(createBtn(i));
            } else {
                group.appendChild(createBtn(1));
                group.appendChild(createOmit());
                for (let i = YhLightApp.noteManager._currentPage - 2; i <= YhLightApp.noteManager._currentPage + 2; i++) group.appendChild(createBtn(i));
                group.appendChild(createOmit());
                group.appendChild(createBtn(totalPages));
            }
        }

        YhLightApp.noteManager._prevButton().onclick = () => {
            if (YhLightApp.noteManager._currentPage > 1) {
                YhLightApp.noteManager._currentPage--;
                YhLightApp.noteManager._renderCard();
            }
        };

        YhLightApp.noteManager._nextButton().onclick = () => {
            if (YhLightApp.noteManager._currentPage < totalPages) {
                YhLightApp.noteManager._currentPage++;
                YhLightApp.noteManager._renderCard();
            }
        };
    },

    _showDetail: function (note) {
        YhLightApp.noteManager.clearHighLight();

        if (note) {
            const detailPage = YhLightApp.noteManager._noteDetailPage();
            const section = YhLightApp.noteManager._sectionEleme();
            const buttongroud = YhLightApp.noteManager._buttongroud();
            const href = note.querySelector("a").href;
            YhLightApp.utils.sendRequest(href, function (htmlContent) {
                section.classList.add("hide");
                detailPage.innerHTML = `
                    <div class="note-detail-contain">
                        <button class="close-button">
                            <i class="fas fa-times"></i>
                        </button>
                        <div class="note-details fade-in">
                            <div class="note-title">${note.querySelector(".note-title").textContent}</div>
                            <div class="note-time">${note.querySelector(".note-time").textContent}</div>
                            ${htmlContent}
                        </div>
                    </div>
                `;
                detailPage.classList.remove("hide");
                buttongroud.classList.add("hide");

                detailPage.querySelector(".close-button").onclick = () => {
                    detailPage.classList.add("hide");
                    section.classList.remove("hide");
                    buttongroud.classList.remove("hide");

                    YhLightApp.noteManager.clearHighLight();
                };

                YhLightApp.noteManager._enableCopy();
            });
        }
    },

    _enableCopy: function () {
        document.querySelectorAll(".code-block").forEach(code => {
            code.addEventListener("mouseenter", () => {
                const btn = document.createElement("button");
                btn.textContent = "复制";
                btn.classList.add("copy-button");
                code.appendChild(btn);

                btn.onclick = () => {
                    navigator.clipboard.writeText(code.querySelector("code").textContent);
                    btn.textContent = "已复制";
                    setTimeout(() => btn.textContent = "复制", 500);
                };
            });
            code.addEventListener("mouseleave", () => {
                const b = code.querySelector(".copy-button");
                if (b) b.remove();
            });
        });
    }
};
