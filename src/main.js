import './style.less';

const bgi = require('./images/background.jpeg');

import Person from './components/Person';
import Scene from './components/Scene';
import Games from './components/Games';

// 初始化窗口
const App = new Games();
const client = App.getEle();
// 初始化场景
new Scene(bgi, client);
// new Person('隐冬', 1);


