import './style.less';

class Scene {
    constructor(bgi, container) {
        this.bgi = bgi;
        this.container = container;
        this.render();
        this.translateX = -475;
        this.translateY = -240;
        this.speedX = 0;
        this.speedY = 0;
        this.diff = 6;
        this.moving = false;

        this.screenWidth = this.container.clientWidth;
        this.screenHeight = this.container.clientHeight;
        this.ele.style.transform = `translate(${this.translateX}px, ${this.translateY}px)`;
        this.eleWidth = this.ele.offsetWidth;
        this.eleHeight = this.ele.offsetHeight;
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
            this.speedX = -this.diff;
        } else if (directs.includes('left')) {
            this.speedX = this.diff;
        }

        if (directs.includes('down')) {
            this.speedY = -this.diff;
        } else if (directs.includes('up')) {
            this.speedY = this.diff;
        }
        if (directs.length > 0 && !this.moving) {
            this.animation();
        }
    }

    animation() {
        if (this.speedX || this.speedY) {
            this.moving = true;
            this.translateX += this.speedX;
            this.translateY += this.speedY;
            if (this.translateX > 0) {
                this.translateX = 0;
            }
            if (this.translateY > 0) {
                this.translateY = 0;
            }
            if (this.translateX + this.eleWidth < this.screenWidth) {
                this.translateX = this.screenWidth - this.eleWidth;
            }
            if (this.translateY + this.eleHeight < this.screenHeight) {
                this.translateY = this.screenHeight - this.eleHeight;
            }
            this.ele.style.transform = `translate(${this.translateX}px, ${this.translateY}px)`;
            requestAnimationFrame(this.animation.bind(this));
        } else {
            this.moving = false;
        }
    }
    
    getEle() {
        return this.ele;
    }
}

export default Scene;