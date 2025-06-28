YhLightApp.projectManager = {
    _contentEleme: () => document.body.querySelector(".projects-section"),

    init: function () {
        YhLightApp.projectManager._contentEleme().innerHTML = "";
        YhLightApp._metaData.projectMetaData.forEach((data) => {
            const card = document.createElement("div");
            card.classList.add("project-card");
            card.innerHTML = `
                <div class="project-header"></div>
                <div class="project-content">
                    <h3>${data.title}</h3>
                    <p>${data.content}</p>
                    <div class="project-stats">
                        <span><i class="fas fa-star"></i>${data.star}</span>
                        <span><i class="fas fa-code-branch">${data.branch}</i></span>
                        <span><i class="fas fa-eye"></i>${data.watch}</span>
                    </div>
                    <a href="${data.href}" target="_blank"></a>
                </div>
            `;
            YhLightApp.projectManager._contentEleme().appendChild(card);
        });
    }
};