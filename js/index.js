// Your code goes here

// nav events

const navLinks = document.querySelectorAll('.nav-link');

Array.from(navLinks).forEach(link => {
    link.addEventListener('mouseover', enlargeText);
    link.addEventListener('mouseout', shrinkText);
})

function enlargeText(event){
    event.target.style.fontSize = '2rem';
}

function shrinkText(event){
    event.target.style.fontSize = '1.6rem';
}

// middle content image events
const midImages = document.querySelectorAll('.img-content');

Array.from(midImages).forEach(image => {
    image.addEventListener('dblclick', enlargeImage);
    image.addEventListener('click', shrinkImage);
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
    button.addEventListener('click', popUp);
})

function popUp(){
    alert('Sign up here!');
}