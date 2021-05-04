// Your code goes here

// nav events

const navLinks = document.querySelectorAll('.nav-link');

Array.from(navLinks).forEach(link => {
    link.addEventListener('mouseover', enlargeText);
    link.addEventListener('mouseout', shrinkText);
    link.addEventListener('click', preventRefresh);
})

function enlargeText(event){
    event.target.style.fontSize = '2rem';
}

function shrinkText(event){
    event.target.style.fontSize = '1.6rem';
}

function preventRefresh(event){
    event.preventDefault();
}

// middle content image events
const midImages = document.querySelectorAll('.img-content');

Array.from(midImages).forEach(image => {
    image.addEventListener('dblclick', enlargeImage);
    image.addEventListener('pointerout', shrinkImage);
})

function enlargeImage(event){
    event.target.style.transform = 'scale(1.3)';
}

function shrinkImage(event){
    event.target.style.transform = 'scale(1)';
}

// button events

const buttons = document.querySelectorAll('.btn');

Array.from(buttons).forEach(button => {
    button.addEventListener('mouseover', textColor);
})

function textColor(event){
    event.target.style.color = 'pink';
}

// secret key event

document.addEventListener('keydown', secretMessage);

function secretMessage(event) {
    if(event.key === "$"){
        alert("You've won an all-inclusive trip to the Maldives!");
    }
}


// highlight event listener

const text = document.querySelectorAll('p');


Array.from(text).forEach(p => {
    p.addEventListener('copy', highlight);
});

function highlight(event){
    event.target.style.backgroundColor = 'yellow';
};


// dark mode and light mode

document.addEventListener('keyup', darkMode);

function darkMode(event){
    if (event.key === "d"){
        event.target.style.backgroundColor = 'black';
        event.target.style.color = 'white';
    }
}

document.addEventListener('keyup', lightMode);

function lightMode(event){
    if (event.key === "l"){
        event.target.style.backgroundColor = 'white';
        event.target.style.color = 'black';
    }
}


// zoom in on bottom image

const topImage = document.querySelector('.content-destination img');

let scale = 1;

function zoom(event){
    scale += event.deltaY * -0.01;

    scale = Math.min(Math.max(.5, scale), 4);

    topImage.style.transform = `scale(${scale})`;
}

topImage.addEventListener('wheel', zoom);

// change heading colors when resize window
const pageTitle = document.querySelector('h1');

function changeHeadingColor(){
    pageTitle.style.color = "#17A2B8";
}

window.addEventListener('resize', changeHeadingColor);