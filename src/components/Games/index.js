import './style.less';

class Games {
    constructor() {
        this.ele = document.createElement('div');
        this.ele.id = `g_${Math.random()}`;
        this.ele.className = 'game_client';
        document.body.append(this.ele);
    }

    getEle() {
        return this.ele;
    }
}

export default Games;