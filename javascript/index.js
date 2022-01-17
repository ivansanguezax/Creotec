import AnimationCicle from "./modules/AnimationCicle.js";

// counters
window.counter = 0;
window.counter2 = 0;

// Creating functions
window.animateImagesandCards = new AnimationCicle(window.counter, 4, (counter) => {
    $(`#btn-nav-img-${counter+1}`).toggleClass('homepage-images-btn');
    $(`#btn-nav-img-${counter==3?1:counter+2}`).toggleClass('homepage-images-btn');
    $(`#card-${counter}`).toggleClass('services-card-active');
    $(`#card-${counter==3?0:counter+1}`).toggleClass('services-card-active');
},1000);

window.animateCarrousel = new AnimationCicle(window.counter2, 5, (counter) => {
    $(`#nav-service-item-${counter+1}`).toggleClass('patients-nav-item');
    $(`#nav-service-item-${counter==4?1:counter+2}`).toggleClass('patients-nav-item');
},2000);

// Calling function
window.animateImagesandCards.movediv();
window.animateCarrousel.movediv();

