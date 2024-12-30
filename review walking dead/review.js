// local reviews
const reviews = [
    {
        id: 1,
        name: "Rick Grimes",
        job: "ZOMBIE KILLER",
        img: "./img/Rick Grimes.jpg",
        text: "Loremat. Assumenda dolorem molestias, sunt aperiam minus nihil!",
    },
    {
        id: 2,
        name: "Daryl Dixon",
        job: "ZOMBIE KILLER",
        img: "./img/Daryl Dixon.jpg",
        text: "Loremat. Assumenda dolorem molestias, sunt aperiam minus nihil!",
    },
    {
        id: 3,
        name: "Negan",
        job: "ZOMBIE KILLER",
        img: "./img/Negan.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorem molestias, sunt aperiam minus nihil!",
    }, 
    {
        id: 4,
        name: "Maggie",
        job: "ZOMBIE KILLER",
        img: "./img/Maggie.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorem molestias, sunt aperiam minus nihil!",
    }, 
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");


const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");


// set string item
let currentItem = 0;

// load intial item
window.addEventListener('DOMContentLoaded', () => {
    showPerson();
});

// show person
function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//show next person
nextBtn.addEventListener('click', () => {
    currentItem++;

    // next infinite
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }

    showPerson();
});

//show prev person
prevBtn.addEventListener('click', () => {
    currentItem--;

    // next infinite
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }

    showPerson();
});


// show random person
randomBtn.addEventListener('click', ()=> {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
});


// selection text
author.addEventListener('mouseup', ()=> {
    const selection = window.getSelection();
    if (!selection.isCollapsed) {
        author.classList.add('highlight');
        setTimeout(()=> {
            author.classList.remove('highlight');
        }, 1000);
    }
});

