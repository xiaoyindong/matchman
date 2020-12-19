import './style.less';

const bgi = require('./images/background.jpeg');

import Scene from './components/Scene';
import Games from './components/Games';
import Person from './components/Person';

const direct = { // 有效按键
    87: 'up',
    65: 'left',
    83: 'down',
    68: 'right',
    74: 'j',
    75: 'k',
    76: 'l',
    80: 'p',
    13: 'enter',
    27: 'esc'
}

const keys = []; // 当前按键

// 初始化窗口
const App = new Games();
// 窗口对象
const client = App.getEle();
// 初始化场景
const scene = new Scene(bgi, client);
// 初始化主人公，初始化在窗口
const person = new Person({
    name: '隐冬',
    blood: 500,
    level: 1,
}, client)


// 地图对象
const map = scene.getEle();
// 初始化机器人，要初始化在地图上
const robot = [];
for(let i = 1; i <= 5; i++) {
    robot.push({id: i});
}
robot.forEach(item => {
    item.person = new Person({
        name: `机器人${item.id}`,
        level: 1,
        blood: 100,
        ai: true,
        translateX: Math.random() * 1000 + 100,
        translateY: Math.random() * 500 + 80,
        translateZ: item.id,
    }, map);
});

// console.log(robot);

// 监听按键
window.addEventListener('keydown', (e) => {
    const key = direct[e.keyCode];
    if (!keys.includes(key) && key) {
        keys.push(key);
        scene.move(keys);
        person.action(keys);
    }
})
// 监听按键
window.addEventListener('keyup', (e) => {
    const key = direct[e.keyCode];
    const idx = keys.indexOf(key);
    if (idx >= 0 && key) {
        keys.splice(idx, 1);
        scene.move(keys);
        person.action(keys);
    }
})


