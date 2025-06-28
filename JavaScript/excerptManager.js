YhLightApp.excerptManager = {
    _contentEleme: () => document.body.querySelector(".excerpt-contain"),

    init: function () {
        YhLightApp.excerptManager._contentEleme().innerHTML = "";
        YhLightApp._metaData.excerptMetaData.forEach((data) => {
            const card = document.createElement("div");
            card.classList.add("excerpt-card", "fade-in");
            card.innerHTML = `
                <div class="excerpt-header"></div>
                <div class="excerpt-content">
                    <p>${data.content}</p>
                    <div class="excerpt-time">${data.time}</div>
                </div>
            `;
            YhLightApp.excerptManager._contentEleme().appendChild(card);
        });
    }
};