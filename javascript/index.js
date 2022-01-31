import AnimationCicle from "./modules/AnimationCicle.js";

const images = [
    "./assets/jpg/img-2.jpg",
    "./assets/jpg/img-1.jpg",
    "./assets/jpg/img-2.jpg",
    "./assets/jpg/img-3.jpg"
];

// Creating functions
window.animateImagesandCards = new AnimationCicle(4, (counter) => {
    $(`#btn-nav-img-${counter+1}`).toggleClass('homepage-images-btn');
    $(`#btn-nav-img-${counter==3?1:counter+2}`).toggleClass('homepage-images-btn');
    $(`.homepage-images`).attr("style", `background-image: url('${images[counter]}');`);
    $(`#card-${counter}`).toggleClass('services-card-active');
    $(`#card-${counter==3?0:counter+1}`).toggleClass('services-card-active');
},5000);

window.animateCarrousel = new AnimationCicle(5, (counter) => {
    $(`#nav-service-item-${counter+1}`).toggleClass('patients-nav-item');
    $(`#nav-service-item-${counter==4?1:counter+2}`).toggleClass('patients-nav-item');
},2000);

// window.animatePictures = new AnimationCicle(7,(counter)=>{
//     document.querySelector(".slide-track").appendChild(firstChild[0]);
//     console.log(firstChild);
//     firstChild.remove();
// },4000)

// Calling function
window.animateImagesandCards.movediv();
window.animateCarrousel.movediv();
window.animatePictures.movediv();


