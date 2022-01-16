class AnimationCicle{
    constructor(counter, max, callback, timeout){
        this.counter = counter;
        this.max = max;
        this.callback = callback;
        this.timeout = timeout;

        this.movediv = this.movediv.bind(this);
        this.imgChange = this.imgChange;
        this.requestAnimationFrame = window.requestAnimationFrame 
                            || window.mozRequestAnimationFrame 
                            || window.webkitRequestAnimationFrame 
                            || window.msRequestAnimationFrame
                            || function(f){return setTimeout(f, 1000/60)};
    }

    movediv(timeout){
        setTimeout(() => { //throttle requestAnimationFrame to 20fps
            this.imgChange().next();
            this.requestAnimationFrame.call(window,this.movediv,timeout);
        }, timeout);
    }

    * imgChange(){
        while(true){
            this.counter = this.counter == this.max ? 0:this.counter;
            this.callback(this.counter);
            this.counter++;
            yield
        }
    }
}

export default AnimationCicle;