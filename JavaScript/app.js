(function (window) {
    const YhLightApp = {
        _pageInfo: {
            main: "./HTML/main.html",
            note: "./HTML/note.html",
            excerpt: "./HTML/excerpt.html",
            project: "./HTML/project.html",
            about: "./HTML/about.html",
        },

        _metaData: {
            noteMetaData: [],
            excerptMetaData: [],
            projectMetaData: []
        },

        _dataPath: {
            note: "./Data/notes-meta.json",
            excerpt: "./Data/excerpts-meta.json",
            project: "./Data/projects-meta.json"
        },

        _requestCompletedCount: 0,

        init: function () {
            YhLightApp.utils.sendRequest(YhLightApp._dataPath.note, (data) => {
                YhLightApp._metaData.noteMetaData = data;
                YhLightApp.utils.requestCompleted(3, complete)
            });

            YhLightApp.utils.sendRequest(YhLightApp._dataPath.excerpt, (data) => {
                YhLightApp._metaData.excerptMetaData = data;
                YhLightApp.utils.requestCompleted(3, complete)
            });

            YhLightApp.utils.sendRequest(YhLightApp._dataPath.project, (data) => {
                YhLightApp._metaData.projectMetaData = data;
                YhLightApp.utils.requestCompleted(3, complete)
            });

            function complete() {
                YhLightApp.indexManager.init();
                YhLightApp.pageManager.loadPage("main");
                YhLightApp.pageManager.SelectorAllLinks("nav-links");
            }
        },

        utils: {
            sendRequest: function (href, takeAction) {
                const xmlhttp = new XMLHttpRequest();
                xmlhttp.open("GET", href, true);
                xmlhttp.onreadystatechange = function () {
                    if (xmlhttp.readyState == 4) {
                        if (xmlhttp.status.toString().startsWith("2")) {
                            let responseText;
                            if (href.toLowerCase().endsWith("json")) {
                                responseText = JSON.parse(xmlhttp.responseText)
                            } else if (href.toLowerCase().endsWith("md")) {
                                YhLightApp.markDown.setCodeBlockTemplate(
                                    `<pre class="code-block"><code>{{content}}</code></pre>`
                                );
                                responseText = YhLightApp.markDown.markDownToHtml(xmlhttp.responseText, true, false);
                            } else {
                                responseText = xmlhttp.responseText
                            }
                            takeAction(responseText);
                        } else {
                            document.body.innerHTML = "";
                            const error = document.createElement("div");
                            error.innerHTML = `<p style="color: red; font-size: 2rem;">请求失败: ${xmlhttp.status}，您可能访问了未完成的页面或是因为网络不稳定导致加载失败或异常</p>`;
                            document.body.appendChild(error);
                        }
                    }
                };
                xmlhttp.send();
            },

            requestCompleted: function (finishCount, CompletedAction) {
                YhLightApp._requestCompletedCount++;
                if (YhLightApp._requestCompletedCount == finishCount) {
                    CompletedAction();
                    YhLightApp.utils._clearCompletedCount();
                }
                return YhLightApp._requestCompletedCount;
            },

            _clearCompletedCount: function () {
                YhLightApp._requestCompletedCount = 0;
            },

            fade: function () {
                const fadeElements = document.querySelectorAll('.fade-in');
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.style.opacity = 1;
                            entry.target.style.transform = 'translateX(0)';
                        }
                    });
                }, { threshold: 0.1 });

                fadeElements.forEach(element => {
                    element.style.opacity = 0;
                    element.style.transform = 'translateX(20px)';
                    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    observer.observe(element);
                });
            },
        }
    };

    window.YhLightApp = YhLightApp;
})(window);