YhLightApp.homeworkManager = {
    _links: () => document.body.querySelectorAll(".homework-card a"),
    _homeworkSection: () => document.body.querySelector(".homework-section"),
    _homeworkScreen: () => document.body.querySelector(".homework-screen"),
    _screen: () => document.body.querySelector(".homework-screen iframe"),
    _closeButton: () => document.body.querySelector(".homework-screen .close-button"),

    init: function () {
        YhLightApp.homeworkManager._links().forEach((link) => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                YhLightApp.homeworkManager._homeworkSection().classList.add("hide");
                YhLightApp.homeworkManager._homeworkScreen().classList.remove("hide");
                YhLightApp.homeworkManager._screen().src = link.href;
            });

            YhLightApp.homeworkManager._closeButton().addEventListener("click", () => {
                YhLightApp.homeworkManager._homeworkSection().classList.remove("hide");
                YhLightApp.homeworkManager._homeworkScreen().classList.add("hide");
            });
        });
    }
}