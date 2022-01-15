var counter = 1;
var counter2 = 1;
var requestAnimationFrame = window.requestAnimationFrame 
                            || window.mozRequestAnimationFrame 
                            || window.webkitRequestAnimationFrame 
                            || window.msRequestAnimationFrame
                            || function(f){return setTimeout(f, 1000/60)};

function movediv(){
    setTimeout(function(){ //throttle requestAnimationFrame to 20fps
        imgChange().next();
        requestAnimationFrame(movediv);
    }, 5000)
}

function* imgChange(){
    while (true) {
        if (counter == 5)counter = 1;
        // TODO: Toggle images
        $(`#btn-nav-img-${counter}`).toggleClass('homepage-images-btn');
        $(`#btn-nav-img-${counter==4?1:counter+1}`).toggleClass('homepage-images-btn');
        // TODO: Toggle images
        $(`#card-${counter-1}`).toggleClass('services-card-active');
        $(`#card-${counter==4?0:counter}`).toggleClass('services-card-active');
        
        if (counter2 == 6)counter2 = 1;
        $(`#nav-service-item-${counter2}`).toggleClass('patients-nav-item');
        $(`#nav-service-item-${counter2==5?1:counter2+1}`).toggleClass('patients-nav-item');
        
        
        counter++;
        counter2++;
        yield
    }
}

movediv();
