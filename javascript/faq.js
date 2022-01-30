import Search from "./modules/Search.js";

const s = new Search();

document.querySelector('#txtSearch').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        s.changePage("./faq_research.html",{search: document.querySelector('#txtSearch').value});
    }
});

// TODO: Hide magnifing glass when typing
// document.querySelector('#txtSearch').addEventListener('focus', () => {
//     console.log('Focus');
//     $('.form-control').css('background-image','');
// });

// document.querySelector('#txtSearch').addEventListener('blur', () => {
//     console.log('Lost Focus');
//     $('.form-control').css('background-image',"./assets/png/Search.png");
// });

