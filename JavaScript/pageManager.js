YhLightApp.pageManager = {
    _contentEleme: () => document.body.querySelector(".page"),

    loadPage: function (pageInfo) {
        const pageKey = pageInfo.replace("#", "");
        const pagePath = YhLightApp._pageInfo[pageKey];
        if (pagePath) {
            YhLightApp.utils.sendRequest(YhLightApp._pageInfo[pageKey], function (pageContent) {
                if (YhLightApp.pageManager._contentEleme()) {
                    YhLightApp.pageManager._contentEleme().innerHTML = pageContent;

                    switch (pageKey) {
                        case "main":
                            YhLightApp.mainManager.init();
                            break;
                        case "homework":
                            YhLightApp.homeworkManager.init();
                            break;
                        case "note":
                            YhLightApp.noteManager.init();
                            break;
                        case "excerpt":
                            YhLightApp.excerptManager.init();
                            break;
                        case "project":
                            YhLightApp.projectManager.init();
                            break;
                    }
                }
            });
        }
    },

    SelectorAllLinks: function (navElemeClassName) {
        const navEleme = document.body.querySelector(navElemeClassName.startsWith(".") ? navElemeClassName : "." + navElemeClassName);
        if (navEleme) {
            const links = navEleme.querySelectorAll("a");
            links.forEach((link) => {
                link.addEventListener("click", (event) => {
                    event.preventDefault();
                    YhLightApp.pageManager.loadPage(link.getAttribute("href"));
                });
            });
        }
    },
};