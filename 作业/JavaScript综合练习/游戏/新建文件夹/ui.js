// UI模块
// 这里用于处理UI等相关的逻辑
YhLightApp.UI = {
    canvas: null,
    _ctx: null,
    score: 0,
    scoreTable: null,
    _trails: [],

    init: function () {
        YhLightApp.UI.canvas = document.getElementById("canvas");
        YhLightApp.UI.canvas.width = window.innerWidth;
        YhLightApp.UI.canvas.height = window.innerHeight;

        YhLightApp.UI._ctx = YhLightApp.UI.canvas.getContext("2d");
        YhLightApp.UI.scoreTable = document.getElementById("score");

        YhLightApp.UI.canvas.addEventListener("mousemove", e => {
            YhLightApp.UI._trails.push({ x: e.clientX, y: e.clientY, time: Date.now() });
            YhLightApp.Game.util.detectSlice(e.clientX, e.clientY);
        });

        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        YhLightApp.UI.util.animate();
    },

    util: {
        // 绘制轨迹的函数
        drawTrails: function () {
            if (YhLightApp.UI._trails.length < 2) return;
            YhLightApp.UI._ctx.beginPath();
            for (let i = 0; i < YhLightApp.UI._trails.length; i++) {
                if (i === 0) {
                    YhLightApp.UI._ctx.moveTo(YhLightApp.UI._trails[i].x, YhLightApp.UI._trails[i].y);
                } else {
                    YhLightApp.UI._ctx.lineTo(YhLightApp.UI._trails[i].x, YhLightApp.UI._trails[i].y);
                }
            }
            YhLightApp.UI._ctx.strokeStyle = "rgba(255, 255, 255, 0.7)";
            YhLightApp.UI._ctx.lineWidth = 6;
            YhLightApp.UI._ctx.lineCap = "round";
            YhLightApp.UI._ctx.lineJoin = "round";
            YhLightApp.UI._ctx.shadowColor = "rgba(255, 255, 255, 0.5)";
            YhLightApp.UI._ctx.shadowBlur = 12;
            YhLightApp.UI._ctx.stroke();
            YhLightApp.UI._ctx.shadowBlur = 0;
        },

        // 主要实现函数，每帧更新画面
        animate: function () {
            YhLightApp.UI._ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = YhLightApp.Game.GameObject._fruits.length - 1; i >= 0; i--) {
                const fruit = YhLightApp.Game.GameObject._fruits[i];
                if (fruit.y > canvas.height + 100) {
                    YhLightApp.Game.GameObject._fruits.splice(i, 1);
                    continue;
                }
                fruit.update();
                fruit.draw();
            }

            for (let i = YhLightApp.Game.GameObject._halves.length - 1; i >= 0; i--) {
                const half = YhLightApp.Game.GameObject._halves[i];
                if (half.alpha <= 0) {
                    YhLightApp.Game.GameObject._halves.splice(i, 1);
                    continue;
                }
                half.update();
                half.draw();
            }

            const now = Date.now();
            YhLightApp.UI._trails = YhLightApp.UI._trails.filter(p => now - p.time < 300);
            YhLightApp.UI.util.drawTrails();
            requestAnimationFrame(YhLightApp.UI.util.animate);
        }
    }
}