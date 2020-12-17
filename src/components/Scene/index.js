import './style.less';

class Scene {
    constructor(bgi, container) {
        this.bgi = bgi;
        this.container = container;
        this.render();
        this.translateX = 0;
        this.translateY = 0;
        this.speedX = 0;
        this.speedY = 0;
        this.moving = false;
    }
    render() {
        this.ele = document.createElement('div');
        this.ele.id = `b_${Math.random()}`;
        this.ele.style.backgroundImage = `url(${this.bgi})`;
        this.ele.className = 'background_part';
        this.container.append(this.ele);
    }

    move(directs) {
        this.speedX = 0;
        this.speedY = 0;
        if (directs.includes('right')) {
            this.speedX = -3;
        } else if (directs.includes('left')) {
            this.speedX = 3;
        }

        if (directs.includes('down')) {
            this.speedY = -5;
        } else if (directs.includes('up')) {
            this.speedY = 5;
        }
        if (directs.length > 0) {
            this.animation();
            this.moving = true;
        } else {
            this.moving = false;
        }
    }

    animation() {
        if (this.speedX || this.speedY) {
            this.translateX += this.speedX;
            this.translateY += this.speedY;
            this.ele.style.transform = `translate(${this.translateX}px, ${this.translateY}px)`;
            requestAnimationFrame(this.animation.bind(this));
        }
    }
    
    getEle() {
        return this.ele;
    }
}

export default Scene;