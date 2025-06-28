YhLightApp.mainManager = {
    _contentEleme: () => document.body.querySelector(".main-contain"),
    _tabButtons: () => document.body.querySelectorAll(".content-section .tab-buttons button"),
    _tabContent: () => document.body.querySelectorAll(".content-section .tab-content .tab-card"),
    _memoCheckboxs: () => document.body.querySelectorAll(".memo-item .task-check"),

    init: function () {
        YhLightApp.mainManager._statCount();
        YhLightApp.mainManager._tabContentCardInit(0);
        YhLightApp.mainManager._tabButtonClick();
        YhLightApp.mainManager._memoCheckboxInit();
    },

    _statCount: function () {
        YhLightApp.mainManager._contentEleme().querySelectorAll(".stat-item .count")[0].textContent = YhLightApp._metaData.noteMetaData.length;
        YhLightApp.mainManager._contentEleme().querySelectorAll(".stat-item .count")[1].textContent = YhLightApp._metaData.excerptMetaData.length;
        YhLightApp.mainManager._contentEleme().querySelectorAll(".stat-item .count")[2].textContent = YhLightApp._metaData.projectMetaData.length;
    },

    _tabButtonClick: function () {
        YhLightApp.mainManager._tabButtons().forEach((button, index) => {
            button.addEventListener("click", () => {
                YhLightApp.mainManager._tabContentCardInit(index);
                YhLightApp.mainManager._tabButtons().forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");
            });
        });
    },

    _tabContentCardInit: function (currentIndex) {
        const noteMetaData = YhLightApp._metaData.noteMetaData;
        const excerptMetaData = YhLightApp._metaData.excerptMetaData;
        const projectMetaData = YhLightApp._metaData.projectMetaData;

        switch (currentIndex) {
            case 0:
                YhLightApp.mainManager._tabContent().forEach((tabContent) => {
                    tabContent.innerHTML = "";
                });
                for (let i = 0; i < 3; i++) {
                    const index = noteMetaData.length - 1 - i;
                    const card = document.createElement("div");
                    card.classList.add("display-note-card");
                    card.innerHTML = `
                        <h3>${noteMetaData[index].title}</h3>
                        <p>${noteMetaData[index].preface}</p>
                        <div class="time">${noteMetaData[index].time}</div>
                    `;
                    card.addEventListener("click", () => {
                        YhLightApp.noteManager._highlightIndex = index;
                        YhLightApp.pageManager.loadPage("note");
                    });
                    YhLightApp.mainManager._tabContent()[currentIndex].appendChild(card);
                }
                break;
            case 1:
                YhLightApp.mainManager._tabContent().forEach((tabContent) => {
                    tabContent.innerHTML = "";
                });
                YhLightApp.mainManager._tabContent()[currentIndex].innerHTML = "";
                for (let i = 0; i < 2; i++) {
                    const index = excerptMetaData.length - 1 - i;
                    const card = document.createElement("div");
                    card.classList.add("display-excerpt-card");
                    card.innerHTML = `
                            <p>${excerptMetaData[index].content}</p>
                            <div class="time">${excerptMetaData[index].time}</div>
                    `;
                    YhLightApp.mainManager._tabContent()[currentIndex].appendChild(card);
                }
                break;
            case 2:
                YhLightApp.mainManager._tabContent().forEach((tabContent) => {
                    tabContent.innerHTML = "";
                });
                YhLightApp.mainManager._tabContent()[currentIndex].innerHTML = "";
                for (let i = 0; i < 3; i++) {
                    const index = projectMetaData.length - 1 - i;
                    const card = document.createElement("div");
                    card.classList.add("display-project-card");
                    card.innerHTML = `
                            <h3>${projectMetaData[index].title}</h3>
                            <p>${projectMetaData[index].content}</p>
                            <div class="project-stats">
                                <span><i class="fas fa-star"></i>${projectMetaData[index].star}</span>
                                <span><i class="fas fa-code-branch">${projectMetaData[index].branch}</i></span>
                                <span><i class="fas fa-eye"></i>${projectMetaData[index].watch}</span>
                            </div>
                            <a href="${projectMetaData[index].href}" target="_blank"></a>
                    `;
                    YhLightApp.mainManager._tabContent()[currentIndex].appendChild(card);
                }
                break;
        }
    },

    _memoCheckboxInit: function () {
        YhLightApp.mainManager._memoCheckboxs().forEach((checkbox) => {
            checkbox.disabled = true;
            checkbox.parentElement.classList.toggle("completed", checkbox.checked);
        });
    }
};