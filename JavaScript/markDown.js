YhLightApp.markDown = {
    _title: "",
    _time: "",

    _parsedElements: [],
    _markDownContent: "",
    _isStyleInitialized: false,

    _templates: {
        title: "<h1>{{title}}</h1>",
        time: "<h3>{{time}}</h3>",

        block: {
            paragraph: "<p>{{content}}</p>",
            codeBlock: "<pre><code>{{content}}</code></pre>",
            image: "<p><img src='{{src}}' alt='{{alt}}'{{titleAttr}}></p>",
            heading: "<h{{level}}>{{content}}</h{{level}}>",
            blockquote: "<blockquote>{{content}}</blockquote>",
            horizontalRule: "<hr>",
        },
        inline: {
            strong: "<strong>{{content}}</strong>",
            em: "<em>{{content}}</em>",
            strongEm: "<strong><em>{{content}}</em></strong>",
            mark: "<mark>{{content}}</mark>",
            del: "<del>{{content}}</del>",
            underline: "<u>{{content}}</u>",
            inlineCode: "<code>{{content}}</code>",
            link: "<a href='{{url}}'{{titleAttr}}>{{content}}</a>"
        }
    },

    setTitle: function (title) { YhLightApp.markDown._title = title; },
    getTitle: function (hasStyle = false) {
        return YhLightApp.markDown._templates.title
            .replace("{{title}}", YhLightApp.markDown.escapeHtml(YhLightApp.markDown._title))
            .replace("<h1>", YhLightApp.markDown._wrapTagWithClass("h1", "yh-markdown-title", hasStyle));
    },
    setTitleTemplate: function (template) { YhLightApp.markDown._templates.title = template; },
    getTitleTemplate: function () { return YhLightApp.markDown._templates.title; },

    setTime: function (time) { YhLightApp.markDown._time = time; },
    getTime: function (hasStyle = false) {
        return YhLightApp.markDown._templates.time
            .replace("{{time}}", YhLightApp.markDown.escapeHtml(YhLightApp.markDown._time))
            .replace("<h3>", YhLightApp.markDown._wrapTagWithClass("h3", "yh-markdown-time", hasStyle));
    },
    setTimeTemplate: function (template) { YhLightApp.markDown._templates.time = template; },
    getTimeTemplate: function () { return YhLightApp.markDown._templates.time; },

    setParagraphTemplate: function (template) { YhLightApp.markDown._templates.block.paragraph = template; },
    getParagraphTemplate: function () { return YhLightApp.markDown._templates.block.paragraph; },

    setCodeBlockTemplate: function (template) { YhLightApp.markDown._templates.block.codeBlock = template; },
    getCodeBlockTemplate: function () { return YhLightApp.markDown._templates.block.codeBlock; },

    setImageTemplate: function (template) { YhLightApp.markDown._templates.block.image = template; },
    getImageTemplate: function () { return YhLightApp.markDown._templates.block.image; },

    setHeadingTemplate: function (template) { YhLightApp.markDown._templates.block.heading = template; },
    getHeadingTemplate: function () { return YhLightApp.markDown._templates.block.heading; },

    setBlockquoteTemplate: function (template) { YhLightApp.markDown._templates.block.blockquote = template; },
    getBlockquoteTemplate: function () { return YhLightApp.markDown._templates.block.blockquote; },

    setHorizontalRuleTemplate: function (template) { YhLightApp.markDown._templates.block.horizontalRule = template; },
    getHorizontalRuleTemplate: function () { return YhLightApp.markDown._templates.block.horizontalRule; },

    setInlineStrongTemplate: function (template) { YhLightApp.markDown._templates.inline.strong = template; },
    getInlineStrongTemplate: function () { return YhLightApp.markDown._templates.inline.strong; },

    setInlineEmTemplate: function (template) { YhLightApp.markDown._templates.inline.em = template; },
    getInlineEmTemplate: function () { return YhLightApp.markDown._templates.inline.em; },

    setInlineStrongEmTemplate: function (template) { YhLightApp.markDown._templates.inline.strongEm = template; },
    getInlineStrongEmTemplate: function () { return YhLightApp.markDown._templates.inline.strongEm; },

    setInlineMarkTemplate: function (template) { YhLightApp.markDown._templates.inline.mark = template; },
    getInlineMarkTemplate: function () { return YhLightApp.markDown._templates.inline.mark; },

    setInlineDelTemplate: function (template) { YhLightApp.markDown._templates.inline.del = template; },
    getInlineDelTemplate: function () { return YhLightApp.markDown._templates.inline.del; },

    setInlineUnderlineTemplate: function (template) { YhLightApp.markDown._templates.inline.underline = template; },
    getInlineUnderlineTemplate: function () { return YhLightApp.markDown._templates.inline.underline; },

    setInlineCodeTemplate: function (template) { YhLightApp.markDown._templates.inline.inlineCode = template; },
    getInlineCodeTemplate: function () { return YhLightApp.markDown._templates.inline.inlineCode; },

    setInlineLinkTemplate: function (template) { YhLightApp.markDown._templates.inline.link = template; },
    getInlineLinkTemplate: function () { return YhLightApp.markDown._templates.inline.link; },

    escapeHtml: function (text) {
        if (typeof text !== "string") {
            return "";
        }
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    },

    _resetState: function () {
        YhLightApp.markDown._title = "";
        YhLightApp.markDown._time = "";
        YhLightApp.markDown._parsedElements = [];
        YhLightApp.markDown._markDownContent = "";
    },

    _wrapTagWithClass: function (tagName, className, applyStyle) {
        if (applyStyle) {
            return `<${tagName} class='${className}'>`;
        }
        return `<${tagName}>`;
    },

    _wrapTagsWithClasses: function (tag1Name, class1Name, tag2Name, class2Name, applyStyle) {
        if (applyStyle) {
            return `<${tag1Name} class='${class1Name}'><${tag2Name} class='${class2Name}'>`;
        }
        return `<${tag1Name}><${tag2Name}>`;
    },

    _parseInlineMarkdown: function (text, hasStyle) {
        let html = YhLightApp.markDown.escapeHtml(text);
        const templates = YhLightApp.markDown._templates.inline;

        html = html.replace(/\*\*\*(.*?)\*\*\*/g, (match, content) => {
            const startTags = YhLightApp.markDown._wrapTagsWithClasses("strong", "yh-markdown-strong", "em", "yh-markdown-em", hasStyle);
            const endTags = "</em></strong>";
            return startTags + content + endTags;
        });

        html = html.replace(/___(.*?)___/g, (match, content) => {
            const startTags = YhLightApp.markDown._wrapTagsWithClasses("strong", "yh-markdown-strong", "em", "yh-markdown-em", hasStyle);
            const endTags = "</em></strong>";
            return startTags + content + endTags;
        });

        html = html.replace(/\*\*(.*?)\*\*/g, (match, content) => {
            const startTag = YhLightApp.markDown._wrapTagWithClass("strong", "yh-markdown-strong", hasStyle);
            return startTag + content + "</strong>";
        });
        html = html.replace(/__(.*?)__/g, (match, content) => {
            const startTag = YhLightApp.markDown._wrapTagWithClass("strong", "yh-markdown-strong", hasStyle);
            return startTag + content + "</strong>";
        });

        html = html.replace(/\*(.*?)\*/g, (match, content) => {
            const startTag = YhLightApp.markDown._wrapTagWithClass("em", "yh-markdown-em", hasStyle);
            return startTag + content + "</em>";
        });
        html = html.replace(/_(.*?)_/g, (match, content) => {
            const startTag = YhLightApp.markDown._wrapTagWithClass("em", "yh-markdown-em", hasStyle);
            return startTag + content + "</em>";
        });

        html = html.replace(/==(.*?)==/g, (match, content) => {
            const startTag = YhLightApp.markDown._wrapTagWithClass("mark", "yh-markdown-mark", hasStyle);
            return startTag + content + "</mark>";
        });

        html = html.replace(/~~(.*?)~~/g, (match, content) => {
            const startTag = YhLightApp.markDown._wrapTagWithClass("del", "yh-markdown-del", hasStyle);
            return startTag + content + "</del>";
        });

        html = html.replace(/\+\+(.*?)\+\+/g, (match, content) => {
            const startTag = YhLightApp.markDown._wrapTagWithClass("u", "yh-markdown-underline", hasStyle);
            return startTag + content + "</u>";
        });

        html = html.replace(/`(.*?)`/g, (match, content) => {
            const startTag = YhLightApp.markDown._wrapTagWithClass("code", "yh-markdown-inline-code", hasStyle);
            return startTag + content + "</code>";
        });

        html = html.replace(/\[(.*?)\]\((.*?)(?:\s+"(.*?)")?\)/g, (match, linkText, url, title) => {
            const titleAttr = title ? ` title='${YhLightApp.markDown.escapeHtml(title)}'` : "";
            const startTag = hasStyle ? `<a href='${YhLightApp.markDown.escapeHtml(url)}'${titleAttr} class='yh-markdown-link'>` : `<a href='${YhLightApp.markDown.escapeHtml(url)}'${titleAttr}>`;
            return startTag + YhLightApp.markDown._parseInlineMarkdown(linkText, hasStyle) + "</a>";
        });

        return html;
    },

    markDownToHtml: function (markdownContent, onlyContent = false, hasStyle = true, title = null, time = null) {
        YhLightApp.markDown._resetState();
        YhLightApp.markDown._markDownContent = markdownContent;

        if (hasStyle) {
            YhLightApp.markDown.initStyles();
        } else {
            const existingStyle = document.getElementById("yh-markdown-default-styles");
            if (existingStyle) {
                existingStyle.remove();
                YhLightApp.markDown._isStyleInitialized = false;
            }
        }

        const templates = YhLightApp.markDown._templates;

        let htmlHeader = "";

        if (title !== null) {
            htmlHeader += templates.title
                .replace("{{title}}", YhLightApp.markDown.escapeHtml(title))
                .replace("<h1>", YhLightApp.markDown._wrapTagWithClass("h1", "yh-markdown-title", hasStyle));
        }

        if (time !== null) {
            htmlHeader += templates.time
                .replace("{{time}}", YhLightApp.markDown.escapeHtml(time))
                .replace("<h3>", YhLightApp.markDown._wrapTagWithClass("h3", "yh-markdown-time", hasStyle));
        }

        const lines = markdownContent.split("\n");
        let i = 0;

        while (i < lines.length) {
            const line = lines[i];
            const trimmedLine = line.trim();

            if (trimmedLine.startsWith("```")) {
                let codeBlockContent = [];
                let startLine = i;
                i++;

                while (i < lines.length && !lines[i].trim().startsWith("```")) {
                    codeBlockContent.push(lines[i]);
                    i++;
                }

                if (i < lines.length && lines[i].trim().startsWith("```")) {
                    YhLightApp.markDown._parsedElements.push({
                        type: "code",
                        content: codeBlockContent.join("\n")
                    });
                    i++;
                    continue;
                } else {
                    i = startLine;
                }
            }

            if (trimmedLine.startsWith(">")) {
                let blockquoteLines = [];
                let startLine = i;
                while (i < lines.length && lines[i].startsWith(">")) {
                    blockquoteLines.push(lines[i].substring(1).trim());
                    i++;
                }
                YhLightApp.markDown._parsedElements.push({
                    type: "blockquote",
                    content: blockquoteLines.join("\n")
                });
                continue;
            }

            const hrMatch = line.match(/^(?:-{3,}|_{3,}|\*{3,})$/);
            if (hrMatch) {
                YhLightApp.markDown._parsedElements.push({ type: "horizontalRule" });
                i++;
                continue;
            }

            const headingMatch = line.match(/^(#{1,6})\s*(.*)/);
            if (headingMatch) {
                YhLightApp.markDown._parsedElements.push({
                    type: "heading",
                    level: headingMatch[1].length,
                    content: headingMatch[2].trim()
                });
                i++;
                continue;
            }

            const imageMatch = line.match(/^!\[(.*?)\]\((.*?)(?:\s+"(.*?)")?\)/);
            if (imageMatch) {
                YhLightApp.markDown._parsedElements.push({
                    type: "image",
                    alt: YhLightApp.markDown.escapeHtml(imageMatch[1] || ""),
                    src: YhLightApp.markDown.escapeHtml(imageMatch[2] || ""),
                    title: YhLightApp.markDown.escapeHtml(imageMatch[3] || "")
                });
                i++;
                continue;
            }

            if (trimmedLine !== "") {
                YhLightApp.markDown._parsedElements.push({
                    type: "paragraph",
                    content: trimmedLine
                });
            }
            i++;
        }

        let renderedElementsHtml = "";

        YhLightApp.markDown._parsedElements.forEach(element => {
            switch (element.type) {
                case "heading":
                    renderedElementsHtml += templates.block.heading
                        .replace("{{level}}", element.level)
                        .replace("{{content}}", YhLightApp.markDown._parseInlineMarkdown(element.content, hasStyle))
                        .replace(`<h${element.level}>`, YhLightApp.markDown._wrapTagWithClass(`h${element.level}`, "yh-markdown-heading", hasStyle));
                    break;
                case "paragraph":
                    renderedElementsHtml += templates.block.paragraph
                        .replace("{{content}}", YhLightApp.markDown._parseInlineMarkdown(element.content, hasStyle))
                        .replace("<p>", YhLightApp.markDown._wrapTagWithClass("p", "yh-markdown-paragraph", hasStyle));
                    break;
                case "code":
                    renderedElementsHtml += templates.block.codeBlock
                        .replace("{{content}}", YhLightApp.markDown.escapeHtml(element.content))
                        .replace("<pre>", YhLightApp.markDown._wrapTagWithClass("pre", "yh-markdown-pre", hasStyle))
                        .replace("<code>", YhLightApp.markDown._wrapTagWithClass("code", "yh-markdown-code", hasStyle));
                    break;
                case "image":
                    const titleAttr = element.title ? ` title='${element.title}'` : "";
                    const imageStartTag = hasStyle ? `<img src='${element.src}' alt='${element.alt}'${titleAttr} class='yh-markdown-image'>` : `<img src='${element.src}' alt='${element.alt}'${titleAttr}>`;
                    const imageWrapperStartTag = YhLightApp.markDown._wrapTagWithClass("p", "yh-markdown-image-wrapper", hasStyle);
                    renderedElementsHtml += `${imageWrapperStartTag}${imageStartTag}</p>`;
                    break;
                case "blockquote":
                    const blockquoteContentHtml = element.content.split('\n')
                        .map(p => YhLightApp.markDown._parseInlineMarkdown(p.trim(), hasStyle))
                        .join('<br>');
                    renderedElementsHtml += templates.block.blockquote
                        .replace("{{content}}", blockquoteContentHtml)
                        .replace("<blockquote>", YhLightApp.markDown._wrapTagWithClass("blockquote", "yh-markdown-blockquote", hasStyle));
                    break;
                case "horizontalRule":
                    renderedElementsHtml += templates.block.horizontalRule
                        .replace("<hr>", YhLightApp.markDown._wrapTagWithClass("hr", "yh-markdown-hr", hasStyle));
                    break;
            }
        });

        const finalHtml = `${htmlHeader}${renderedElementsHtml}`;

        if (onlyContent) {
            return finalHtml;
        } else {
            return YhLightApp.markDown._wrapTagWithClass("div", "yh-markdown-container", hasStyle).replace(">", `>${finalHtml}</div>`);
        }
    },

    _defaultStyles: `
    .yh-markdown-container {
        font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
        line-height: 1.4;
        color: #333333;
        padding: 15px 20px;
        background-color: #ffffff;
        border-radius: 8px;
        border: 1px solid #e5e5e5;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
        box-sizing: border-box;
        font-weight: normal;
        font-size: 16px;
        width: 100%;
        height: auto;
        padding-left: 1.5vw;
        padding-right: 1.5vw;
        margin: 10px auto;
    }

    .yh-markdown-title {
        font-size: 2.2em;
        color: #2c3e50;
        text-align: center;
        font-weight: 700;
        letter-spacing: 0.02em;
    }

    .yh-markdown-time {
        font-size: 0.85em;
        color: #7f8c8d;
        text-align: center;
        font-weight: normal;
    }

    .yh-markdown-heading,
    .yh-markdown-container h1,
    .yh-markdown-container h2,
    .yh-markdown-container h3,
    .yh-markdown-container h4,
    .yh-markdown-container h5,
    .yh-markdown-container h6 {
        font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
        color: #34495e;
        margin: 0 0.4em;
        padding-bottom: 0.2em;
        border-bottom: 1px solid #f5f5f5;
        font-weight: 600;
    }
    .yh-markdown-container h1 { font-size: 2.0em; }
    .yh-markdown-container h2 { font-size: 1.7em; }
    .yh-markdown-container h3 { font-size: 1.4em; }
    .yh-markdown-container h4 { font-size: 1.2em; }
    .yh-markdown-container h5 { font-size: 1.0em; }
    .yh-markdown-container h6 { font-size: 0.9em; color: #555555; }

    .yh-markdown-paragraph {
        font-size: 0.9rem;
        line-height: 1.6;
        color: #333333;
        margin-bottom: 0.6em;
        font-weight: normal;
    }

    .yh-markdown-inline-code {
        font-family: 'Cascadia Code', 'Consolas', 'Monaco', 'Courier New', monospace;
        font-size: 0.85rem;
        background-color: #f0f0f0;
        color: #c7254e;
        padding: 0px 3px;
        border-radius: 3px;
        white-space: nowrap;
        border: 1px solid #e0e0e0;
    }

    .yh-markdown-pre {
        background-color: #f8f8f8;
        border: 1px solid #e0e0e0;
        border-radius: 6px;
        padding: 10px 15px;
        overflow-x: auto;
        box-shadow: 0 3px 12px rgba(0, 0, 0, 0.04);
    }

    .yh-markdown-code {
        font-family: 'Cascadia Code', 'Consolas', 'Monaco', 'Courier New', monospace;
        font-size: 0.8rem;
        color: #333333;
        display: block;
        white-space: pre;
        font-weight: normal;
    }

    a.yh-markdown-link {
        color: #007acc;
        text-decoration: none;
        transition: color 0.2s ease-in-out;
    }

    a.yh-markdown-link:hover {
        color: #0056b3;
        text-decoration: underline;
    }

    .yh-markdown-image-wrapper {
        text-align: center;
    }

    .yh-markdown-image {
        max-width: 100%;
        height: auto;
        border-radius: 7px;
        box-shadow: 0 5px 18px rgba(0, 0, 0, 0.08);
        transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        display: block;
        margin: 0.4em auto;
        border: 1px solid #e0e0e0;
    }
    .yh-markdown-image:hover {
        transform: translateY(-2px);
        box-shadow: 0 7px 22px rgba(0, 0, 0, 0.12);
    }

    .yh-markdown-blockquote {
        border-left: 4px solid #aeb6bf;
        padding: 10px 18px;
        margin: 0.4em 0;
        background-color: #f9f9f9;
        border-radius: 5px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    }
    .yh-markdown-blockquote p {
        font-style: italic;
        color: #555555;
        margin: 0.5em 0;
        font-weight: normal;
    }

    .yh-markdown-hr {
        border: none;
        border-top: 1px solid #e8e8e8;
        margin: 1.5em auto;
        width: 55%;
        background-color: transparent;
    }

    .yh-markdown-strong { font-weight: 700; color: #2c3e50; }
    .yh-markdown-em { font-style: italic; color: #e74c3c; }
    .yh-markdown-strong .yh-markdown-em { font-weight: 700; font-style: italic; color: #d35400; }
    .yh-markdown-mark { background-color: rgba(255, 255, 0, 0.25); padding: 1px 4px; border-radius: 3px; color: #c08d00; }
    .yh-markdown-del { text-decoration: line-through; color: #95a5a6; }
    .yh-markdown-underline { text-decoration: underline; color: #27ae60; }

    @media (max-width: 768px) {
        .yh-markdown-container {
            padding: 10px 15px;
            font-size: 15px;
            margin: 8px 1vw;
            border-radius: 7px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
            padding-left: 1vw;
            padding-right: 1vw;
        }

        .yh-markdown-title { font-size: 2.0em; margin-bottom: 15px; padding-bottom: 8px; }
        .yh-markdown-time { font-size: 0.82em; margin-bottom: 20px; }
        .yh-markdown-heading { font-size: 1.8em; }
        .yh-markdown-container h1 { font-size: 1.8em; }
        .yh-markdown-container h2 { font-size: 1.5em; }
        .yh-markdown-container h3 { font-size: 1.2em; }
        .yh-markdown-container h4 { font-size: 1.0em; }
        .yh-markdown-container h5 { font-size: 0.9em; }
        .yh-markdown-container h6 { font-size: 0.85em; }

        .yh-markdown-paragraph { font-size: 0.9rem; line-height: 1.5; margin-bottom: 0.5em; }
        .yh-markdown-inline-code { font-size: 0.85rem; }
        .yh-markdown-pre { padding: 8px 12px; }
        .yh-markdown-code { font-size: 0.8rem; }

        .yh-markdown-hr { width: 75%; margin: 1.5em auto; }
        .yh-markdown-image-wrapper { margin: 0.4em 0; }
        .yh-markdown-blockquote { padding: 8px 15px; margin: 0.4em 0; }
    }
    `,

    initStyles: function () {
        if (!YhLightApp.markDown._isStyleInitialized) {
            const style = document.createElement("style");
            style.id = "yh-markdown-default-styles";
            style.textContent = YhLightApp.markDown._defaultStyles;
            document.head.appendChild(style);
            YhLightApp.markDown._isStyleInitialized = true;
        }
    }
};