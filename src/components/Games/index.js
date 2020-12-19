import './style.less';
import timg1 from '../../images/timg1.gif';
import timg2 from '../../images/timg2.gif';


let timer1 = null;
let timer2 = null;


class Games {
    constructor() {
        this.ele = document.createElement('div');
        this.ele.id = `g_${Math.random()}`;
        this.ele.className = 'game_client';
        this.img = document.createElement('img');
        this.img.className = 'effect_img';
        this.ele.append(this.img);
        document.body.append(this.ele);
        this.stop = false;
    }

    effect(robot) {
        if (this.stop) {
            return;
        }
        this.img.style.zIndex = 10;
        this.stop = true;
        timer1 = setTimeout(() => {
            // 技能完成，清除效果
            this.stop = false;
            this.img.src = timg2;
            this.img.style.zIndex = -1;
            // 杀死所有机器人
            robot.forEach(item => {
                item.person.makedie();
            });
            robot.length = 0;
            
        }, 3000);
        this.img.src = timg2;
        timer2 = setTimeout(() => {
            this.img.src = timg1;
        }, 1800);
    }

    cancel() {
        clearTimeout(timer1);
        clearTimeout(timer2);
        this.stop = false;
        this.img.src = timg2;
        this.img.style.zIndex = -1;
    }

    getEle() {
        return this.ele;
    }
}

export default Games;