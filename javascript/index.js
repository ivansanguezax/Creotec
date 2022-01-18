import AnimationCicle from "./modules/AnimationCicle.js";

// Creating functions
window.animateImagesandCards = new AnimationCicle(4, (counter) => {
    $(`#btn-nav-img-${counter+1}`).toggleClass('homepage-images-btn');
    $(`#btn-nav-img-${counter==3?1:counter+2}`).toggleClass('homepage-images-btn');
    $(`#card-${counter}`).toggleClass('services-card-active');
    $(`#card-${counter==3?0:counter+1}`).toggleClass('services-card-active');
},1000);

window.animateCarrousel = new AnimationCicle(5, (counter) => {
    $(`#nav-service-item-${counter+1}`).toggleClass('patients-nav-item');
    $(`#nav-service-item-${counter==4?1:counter+2}`).toggleClass('patients-nav-item');
},2000);

window.animatePictures = new AnimationCicle(7,(counter)=>{
    let firstChild = $(".slide").first().attr('id', 'remove');
    // firstChild.remove();
    console.log($(".slide-track").first());
},1000)

// Calling function
window.animateImagesandCards.movediv();
window.animateCarrousel.movediv();
window.animatePictures.movediv();


