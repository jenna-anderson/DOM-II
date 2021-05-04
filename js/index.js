// Your code goes here

const navLinks = document.querySelectorAll('.nav-link');

Array.from(navLinks).forEach(link => {
    link.addEventListener('mouseover', enlarge);
    link.addEventListener('mouseout', shrink);
})

function enlarge(event){
    event.target.style.fontSize = '2rem';
}

function shrink(event){
    event.target.style.fontSize = '1.6rem';
}