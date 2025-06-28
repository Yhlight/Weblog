YhLightApp.indexManager = {
    _settingButton: () => document.body.querySelector(".setting"),
    _settingPage: () => document.body.querySelector(".setting-page"),
    _colorToggleButton: () => document.body.querySelectorAll(".color-button"),
    _root: () => document.querySelector(":root"),

    _themeColor: [
        "none",
        "sakura",
        "violet"
    ],

    init: function () {
        YhLightApp.indexManager._settingButton().addEventListener("click", () => {
            YhLightApp.indexManager.isVisibility();
        });

        window.addEventListener("scroll", () => {
            YhLightApp.indexManager._settingPage().classList.add("hide");
            YhLightApp.indexManager._settingPage().style.opacity = 0;
        });

        document.body.querySelector(".page").addEventListener("click", () => {
            YhLightApp.indexManager._settingPage().classList.add("hide");
            YhLightApp.indexManager._settingPage().style.opacity = 0;
        });

        YhLightApp.indexManager._toggleColorBtnInit();
    },

    isVisibility: function () {
        if (YhLightApp.indexManager._settingPage().classList.contains("hide")) {
            YhLightApp.indexManager._settingPage().classList.remove("hide");
            YhLightApp.indexManager._settingPage().style.opacity = 1;
        } else {
            YhLightApp.indexManager._settingPage().classList.add("hide");
            YhLightApp.indexManager._settingPage().style.opacity = 0;
        }
    },

    _toggleColorBtnInit: function () {
        YhLightApp.indexManager._colorToggleButton().forEach((toggleButton, index) => {
            toggleButton.addEventListener("click", function () {
                YhLightApp.indexManager._root().setAttribute("data-theme-color", YhLightApp.indexManager._themeColor[index])
            })
        });
    }
}