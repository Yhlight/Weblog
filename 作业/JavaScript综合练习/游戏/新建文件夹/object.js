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