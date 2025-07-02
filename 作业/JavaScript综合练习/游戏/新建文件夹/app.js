```
((window) => {
    const YhLightApp = {
        init: function () {
            YhLightApp.UI.init();
            YhLightApp.Game.init();
        }
    };
    window.YhLightApp = YhLightApp;
})(window);
```

```
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
```

```
// 游戏模块
// 此模块用于处理游戏逻辑
YhLightApp.Game = {
    gravity: 0.25,

    init: function () {
        setInterval(YhLightApp.Game.util.spawnFruit, 1200);
    },

    util: {
        // 生成水果的函数
        spawnFruit: function () {
            // 为了防止出现边角问题，生成水果应该在[30, width - 30]的位置生成
            const x = Math.random() * (YhLightApp.UI.canvas.width - 59) + 30;
            const y = canvas.height + 30;
            YhLightApp.Game.GameObject._fruits.push(new YhLightApp.Game.GameObject.Fruit(x, y));
        },

        // 切开水果的函数
        sliceFruit: function (fruit) {
            const leftHalf = new YhLightApp.Game.GameObject.FruitHalf(
                fruit.x,
                fruit.y,
                fruit.radius,
                fruit.color,
                fruit.vx - 2,
                fruit.vy - 2,
                Math.PI / 2,
                Math.PI * 1.5
            );
            const rightHalf = new YhLightApp.Game.GameObject.FruitHalf(
                fruit.x,
                fruit.y,
                fruit.radius,
                fruit.color,
                fruit.vx + 2,
                fruit.vy - 2,
                Math.PI * 1.5,
                Math.PI / 2 + 2 * Math.PI
            );
            YhLightApp.Game.GameObject._halves.push(leftHalf, rightHalf);
        },

        // 碰撞监测函数
        detectSlice: function (x, y) {
            YhLightApp.Game.GameObject._fruits.forEach((fruit, index) => {
                const dx = fruit.x - x;
                const dy = fruit.y - y;
                if (!fruit.marked && Math.sqrt(dx * dx + dy * dy) < fruit.radius) {
                    fruit.marked = true;
                    YhLightApp.UI.score++;
                    YhLightApp.UI.scoreTable.textContent = `得分: ${YhLightApp.UI.score}`;
                    YhLightApp.Game.util.sliceFruit(fruit);
                    YhLightApp.Game.GameObject._fruits.splice(index, 1);
                }
            });
        }
    }
}
```

```
// 游戏对象模块
// 此模块用来管理所有的游戏对象
YhLightApp.Game.GameObject = {
    _fruits: [],
    _halves: [],

    Fruit: class {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.radius = 30;
            this.color = `hsl(${Math.random() * 360}, 80%, 60%)`;
            this.vx = Math.random() * 4 - 2;
            const vyMin = Math.sqrt(YhLightApp.UI.canvas.height / 12);
            this.vy = -vyMin - Math.random() * 5;
            this.marked = false;

        }

        update() {
            this.x += this.vx;
            this.vy += YhLightApp.Game.gravity;
            this.y += this.vy;
        }

        draw() {
            YhLightApp.UI._ctx.beginPath();
            YhLightApp.UI._ctx.fillStyle = this.color;
            YhLightApp.UI._ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            YhLightApp.UI._ctx.fill();
        }
    },

    FruitHalf: class {
        constructor(x, y, radius, color, vx, vy, startAngle, endAngle) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.vx = vx;
            this.vy = vy;
            this.startAngle = startAngle;
            this.endAngle = endAngle;
            this.rotation = 0;
            this.rotationSpeed = (Math.random() - 0.5) * 0.2;
            this.alpha = 1;
        }

        update() {
            this.x += this.vx;
            this.vy += YhLightApp.Game.gravity;
            this.y += this.vy;
            this.rotation += this.rotationSpeed;
            this.alpha -= 0.01;
        }

        draw() {
            YhLightApp.UI._ctx.save();
            YhLightApp.UI._ctx.translate(this.x, this.y);
            YhLightApp.UI._ctx.rotate(this.rotation);
            YhLightApp.UI._ctx.globalAlpha = this.alpha;
            YhLightApp.UI._ctx.beginPath();
            YhLightApp.UI._ctx.fillStyle = this.color;
            YhLightApp.UI._ctx.moveTo(0, 0);
            YhLightApp.UI._ctx.arc(0, 0, this.radius, this.startAngle, this.endAngle);
            YhLightApp.UI._ctx.closePath();
            YhLightApp.UI._ctx.fill();
            YhLightApp.UI._ctx.restore();
            YhLightApp.UI._ctx.globalAlpha = 1;
        }
    },
}
```