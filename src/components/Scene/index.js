import './style.less';

class Scene {
    constructor(bgi, container) {
        this.bgi = bgi;
        this.container = container;
        this.render();
    }
    render() {
        this.ele = document.createElement('div');
        this.ele.id = `b_${Math.random()}`;
        this.ele.style.backgroundImage = `url(${this.bgi})`;
        this.ele.className = 'background_part';
        this.container.append(this.ele);
    }
    
    getEle() {
        return this.ele;
    }
}

export default Scene;