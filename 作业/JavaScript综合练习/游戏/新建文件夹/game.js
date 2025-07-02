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