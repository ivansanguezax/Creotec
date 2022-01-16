import AnimationCicle from "./modules/AnimationCicle.js";

window.counter = 0;
window.counter2 = 0;

window.animateImages = new AnimationCicle(window.counter, 4, (counter) => {
    $(`#btn-nav-img-${counter+1}`).toggleClass('homepage-images-btn');
    $(`#btn-nav-img-${counter==3?1:counter+2}`).toggleClass('homepage-images-btn');
});


window.animateImages.movediv(1000);

// function movediv(){
//     setTimeout(function(){ //throttle requestAnimationFrame to 20fps
//         imgChange().next();
//         requestAnimationFrame(movediv);
//     }, 5000)
// }


// function* imgChange(){
//     while (true) {
//         if (counter == 4)counter = 1;
//         // TODO: Toggle images
//         $(`#btn-nav-img-${counter+1}`).toggleClass('homepage-images-btn');
//         $(`#btn-nav-img-${counter==3?1:counter+2}`).toggleClass('homepage-images-btn');
        
//         // TODO: Toggle images
//         $(`#card-${counter}`).toggleClass('services-card-active');
//         $(`#card-${counter==3?0:counter+1}`).toggleClass('services-card-active');
        
//         if (counter2 == 6)counter2 = 1;
//         $(`#nav-service-item-${counter2+1}`).toggleClass('patients-nav-item');
//         $(`#nav-service-item-${counter2==5?1:counter2+2}`).toggleClass('patients-nav-item');
        
        
//         counter++;
//         counter2++;
//         yield
//     }
// }

// movediv();
