import '../scss/main.scss';
import moment from 'moment';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

const name = 'Kamil';
const age = 30;


console.log(`Witajcie!!! Z tej strony ${name}. Zabaczcie jaką fajną stronę zrobiłem :)`);

const heading = document.querySelector('.main__heading--js');
heading.innerHTML =`Witaj Drogi Odwiedzający, nazywam się ${name}`;


//funkcja greet
function greet(age, name){
    console.log(
        `Cześć, jestem ${name} i mam ${age} lat`
    );
}

greet(age, name);

// funkcja greet w notacji arrow

const greetNew = (age, name) => {
    console.log(
        `Cześć, jestem ${name} i mam ${age} lat arrow`
    );
}

greetNew(age, name);

function createContent(querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = content;
}

createContent('.main__heading--js', `Cześć, jestem ${name} i mam ${age} lat`);

const button = document.querySelector('.action--js');

console.log(button)

button.addEventListener('click', () =>{
    const heading = document.querySelector(".main__heading--js");
    heading.innerHTML= 'Witaj Drogi Odwiedzający';
});

const hamburger = document.querySelector('.hamburger--js')

hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open')
});