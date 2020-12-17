import './style.less';

const bgi = require('./images/background.jpeg');

import Person from './components/Person';
import Scene from './components/Scene';
import Games from './components/Games';

const direct = {
    87: 'up',
    65: 'left',
    83: 'down',
    68: 'right',
    74: 'j',
    75: 'k',
    76: 'l',
    13: 'enter',
    27: 'esc'
}

const keys = [];

// 初始化窗口
const App = new Games();
const client = App.getEle();
// 初始化场景
const scene = new Scene(bgi, client);
// new Person('隐冬', 1);

window.addEventListener('keydown', (e) => {
    const key = direct[e.keyCode];
    if (!keys.includes(key) && key) {
        keys.push(key);
        scene.move(keys);
    }
})

window.addEventListener('keyup', (e) => {
    const key = direct[e.keyCode];
    const idx = keys.indexOf(key);
    if (idx >= 0 && key) {
        keys.splice(idx, 1);
        scene.move(keys);
    }
})


