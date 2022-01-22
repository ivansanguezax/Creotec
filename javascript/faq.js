import Search from "./modules/Search.js";

const s = new Search();

document.querySelector('#txtSearch').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        s.changePage("./faq_research.html",{search: document.querySelector('#txtSearch').value});
    }
});