/**
 * 名称
 * 等级
 * 元素
 */

import './person.less';

class Person {
    constructor(name, level = 1) {
        this.name = name;
        this.level = level;
        this.render();
    }

    render() {
        this.ele = document.createElement('div');
        this.ele.id = `p_${Math.random()}`;
        this.ele.className = 'person_item';

        this.ele.innerHTML = `<div><div>123</div></div>`;
        
        document.body.append(this.ele);
    }

    getEle() {
        return this.ele;
    }
}

export default Person;