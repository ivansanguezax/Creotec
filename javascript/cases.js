import Navigator from "./modules/Navigator.js";

// const content = {
//     body: [
//         {
//             id: 1,
//             title: "Title 1",
//             img: "./assets/jpg/img-1.jpg",
//             url: "https://www.google.com"
//         },
//         {
//             id: 2,
//             title: "Title 2",
//             img: "./assets/jpg/img-2.jpg",
//             url: "https://www.google.com"
//         },
//         {
//             id: 3,
//             title: "Title 3",
//             img: "./assets/jpg/img-3.jpg",
//             url: "https://www.google.com"
//         },
//         {
//             id: 4,
//             title: "Title 4",
//             img: "./assets/jpg/img-1.jpg",
//             url: "https://www.google.com"
//         },
//         {
//             id: 5,
//             title: "Title 5",
//             img: "./assets/jpg/img-2.jpg",
//             url: "https://www.google.com"
//         },
//         {
//             id: 6,
//             title: "Title 6",
//             img: "./assets/jpg/img-3.jpg",
//             url: "https://www.google.com"
//         }
//     ]
// };
const content = {
    body: [
        {
            id: 1,
            title: "Title 1",
            img: "./assets/jpg/img-1.jpg",
            url: "https://www.google.com"
        },
        {
            id: 2,
            title: "Title 2",
            img: "./assets/jpg/img-2.jpg",
            url: "https://www.google.com"
        },
        {
            id: 3,
            title: "Title 3",
            img: "./assets/jpg/img-3.jpg",
            url: "https://www.google.com"
        },
        {
            id: 4,
            title: "Title 4",
            img: "./assets/jpg/img-1.jpg",
            url: "https://www.google.com"
        },
        {
            id: 5,
            title: "Title 5",
            img: "./assets/jpg/img-2.jpg",
            url: "https://www.google.com"
        },
        {
            id: 6,
            title: "Title 6",
            img: "./assets/jpg/img-3.jpg",
            url: "https://www.google.com"
        },
        {
            id: 7,
            title: "Title 7",
            img: "./assets/jpg/img-1.jpg",
            url: "https://www.google.com"
        },
        {
            id: 8,
            title: "Title 8",
            img: "./assets/jpg/img-2.jpg",
            url: "https://www.google.com"
        },
        {
            id: 9,
            title: "Title 9",
            img: "./assets/jpg/img-3.jpg",
            url: "https://www.google.com"
        },
        {
            id: 10,
            title: "Title 10",
            img: "./assets/jpg/img-1.jpg",
            url: "https://www.google.com"
        },
        {
            id: 11,
            title: "Title 11",
            img: "./assets/jpg/img-2.jpg",
            url: "https://www.google.com"
        },
        {
            id: 12,
            title: "Title 12",
            img: "./assets/jpg/img-3.jpg",
            url: "https://www.google.com"
        },
        {
            id: 13,
            title: "Title 13",
            img: "./assets/jpg/img-1.jpg",
            url: "https://www.google.com"
        },
        {
            id: 14,
            title: "Title 14",
            img: "./assets/jpg/img-2.jpg",
            url: "https://www.google.com"
        },
        {
            id: 15,
            title: "Title 15",
            img: "./assets/jpg/img-3.jpg",
            url: "https://www.google.com"
        },
        {
            id: 16,
            title: "Title 16",
            img: "./assets/jpg/img-1.jpg",
            url: "https://www.google.com"
        },
        {
            id: 17,
            title: "Title 17",
            img: "./assets/jpg/img-2.jpg",
            url: "https://www.google.com"
        },
        {
            id: 18,
            title: "Title 18",
            img: "./assets/jpg/img-3.jpg",
            url: "https://www.google.com"
        },
        {
            id: 19,
            title: "Title 19",
            img: "./assets/jpg/img-1.jpg",
            url: "https://www.google.com"
        },
        {
            id: 20,
            title: "Title 20",
            img: "./assets/jpg/img-2.jpg",
            url: "https://www.google.com"
        },
        {
            id: 21,
            title: "Title 21",
            img: "./assets/jpg/img-3.jpg",
            url: "https://www.google.com"
        },
        {
            id: 22,
            title: "Title 22",
            img: "./assets/jpg/img-1.jpg",
            url: "https://www.google.com"
        },
        {
            id: 23,
            title: "Title 23",
            img: "./assets/jpg/img-1.jpg",
            url: "https://www.google.com"
        },
        {
            id: 24,
            title: "Title 24",
            img: "./assets/jpg/img-2.jpg",
            url: "https://www.google.com"
        },
        {
            id: 25,
            title: "Title 25",
            img: "./assets/jpg/img-3.jpg",
            url: "https://www.google.com"
        },
        {
            id: 26,
            title: "Title 26",
            img: "./assets/jpg/img-1.jpg",
            url: "https://www.google.com"
        },
        {
            id: 27,
            title: "Title 27",
            img: "./assets/jpg/img-2.jpg",
            url: "https://www.google.com"
        },
        {
            id: 28,
            title: "Title 28",
            img: "./assets/jpg/img-3.jpg",
            url: "https://www.google.com"
        },
    ]       
}

const ids = Array.prototype.slice.call(document.getElementsByClassName("card")).map(element => element.id);
const buttons = ["btn-prev", "btn-next"]

const nav = new Navigator(content,ids,buttons);

document.getElementById(buttons[0]).onclick = nav.previousPage;
document.getElementById(buttons[1]).onclick = nav.nextPage;