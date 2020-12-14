/**
 * 名称
 * 等级
 * 元素
 */
class Person {
    constructor(name, level = 1) {
        this.name = name;
        this.level = level;
        this.render();
    }

    render() {
        this.ele = document.createElement('div');
        this.ele.id = `p_${Math.random()}`;
        console.log(this.ele);
    }
}

export default Person;