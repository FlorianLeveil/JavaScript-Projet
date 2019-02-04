'use strict';

// Trouvez toutes les balises div du document. Loggez le deuxième élément s'il est présent.
const myDivs = document.getElementsByTagName('div');
console.log('myDivs', myDivs);

const myDivs2 = document.querySelectorAll('div');
console.log('myDivs2', myDivs2);


// Trouvez toutes les balises p avec la classe 'my-paragraph' du document. Loggez le premier élément s'il est présent.
const myParagraphs = document.getElementsByClassName('secondary-paragraph');
const myParagraphs2 = document.querySelectorAll('.secondary-paragraph');


// Trouvez la balise span avec l'id 'js-unique-el'. Loggez-là. Inspéctez les propriétés de cet objet Element
const myUniqueEl = document.getElementById('js-unique-el');
const myUniqueEl2 = document.querySelector('#js-unique-el');


// Trouvez toutes les balises p qui se trouvent dans un div.
const myParagraphsInDivs = document.querySelectorAll('div p');
console.log('myParagraphsInDivs', myParagraphsInDivs);


// Trouvez toutes les balises span qui sont précédées par un div.
const spansPreceededByDivs = document.querySelector('div + span');
console.log('myParagraphsInDivs', spansPreceededByDivs);


// -----------------------------------------------------------------------------------------------------------------------------------------


// Ajoutez le texte 'I am the first paragraph' au premier paragraphe du document.
const firstP = document.querySelector('.first-p');
firstP.innerText = 'I am the first paragraph';
console.log('firstP value', firstP.innerText);


// Ajoutez le HTML <span>Hello</span> au deuxième paragraphe du document.
const secondP = document.querySelector('.second-p');
secondP.innerHTML = '<span>Hello</span>';
console.log('secondP html', secondP.innerHTML);


// Modifiez les attributs width à 50% et height à 'auto' de l'image.
const myImg = document.querySelector('img');
myImg.setAttribute('width', '50%');
myImg.setAttribute('height', 'auto');


// Ajoutez un attribut alt non vide à l'image.
myImg.setAttribute('alt', 'Random Image');


// Donnez la couleur 'blue' au premier paragraphe du div et la taille de police '1.5rem'.
firstP.style.color = 'blue';
firstP.style.fontSize = '1.5rem';

// Ajoutez la classe img à l'image.
myImg.className = 'my-class'; // myImg.className += 'another-class';
myImg.classList.add('my-class');
myImg.classList.remove('some-class');


// ---------------------------------------------------------------------------------------------------------------------------------------------


const myBody = document.querySelector('body');
const newEl = document.createElement('p');
newEl.innerText = 'Hello';
newEl.style.color = 'red';


// dernier enfant
myBody.appendChild(newEl);


// premier enfant
const newEl2 = document.createElement('p');
newEl2.innerText = 'Hello';
newEl2.style.color = 'yellow';
myBody.prepend(newEl2);


// pour supprimer
myBody.removeChild(newEl2);


// Windows
console.log(window);

// const navigator = document.getElementById('js-navigator');
// navigator.innerText = window.navigator.userAgent;
// myBody.prepend(navigator);

// const languagez = document.getElementById('js-navigator');
// const languagez= document.createElement('p')
// languagez.innerText = 'Langue principal : 'window.navigator.language;
// myBody.prepend(languagez);

// const pnavigator = document.createElement('p');
// pnavigator.innerText = 'BROWSER OBJECT MODEL';
// pnavigator.style.color = 'red';
// myBody.prepend(pnavigator);


// const screen = document.getElementById('js-navigator1');
// screen.innerText = 'Largeur de l ecran : '+ window.screen.availWidth + 'PX';
// myBody.prepend(screen);


// const pscreen = document.createElement('p');
// pscreen.innerText = 'SCREEN';
// pscreen.style.color = 'red';
// myBody.prepend(pscreen);


var txt = "";
txt += "<H2>NAVIGATOR</H2>";
txt += "<p>Navigateur: " + window.navigator.appCodeName + "</p>";
txt += "<p>Navigateur: " + window.navigator.appName + "</p>";
txt += "<p>Version: " + window.navigator.appVersion + "</p>";
txt += "<p>Cookie activés: " + window.navigator.cookieEnabled + "</p>";
txt += "<p>Langage: " + window.navigator.language + "</p>";
txt += "<p>Navigateur en ligne: " + window.navigator.onLine + "</p>";
txt += "<p>Plateforme: " + window.navigator.platform + "</p>";
txt += "<p>utilisateur: " + window.navigator.userAgent + "</p>";

txt += "<H2>SCREEN</H2>";
txt += "<p>Largeur de l'écran: " + window.screen.availWidth + "</p>";
txt += "<p>Hauteur de l'écran: " + window.screen.availHeight + "</p>";
txt += "<p> orientation de votre écran: " + window.screen.orientation.type + "</p>";

txt += "<H2>WINDOW</H2>";
txt += "<p>Largeur de la fenêtre: " + window.window.innerWidth + "</p>";
txt += "<p>Hauteur de la fenêtre: " + window.window.innerHeight + "</p>";
txt += "<p> Largeur de mon navigateur: " + window.screen.orientation.type + "</p>";
txt += "<p> Hauteur de mon navigateur: " + window.screen.orientation.type + "</p>";


document.getElementById("js-navigator").innerHTML = txt;


// Boutton

const myBtn = document.querySelector('#js-btn');
myBtn.addEventListener('click', (event) => {
    console.log('Clicked', event);
});

let isClickedTwice = false;
const myGrayBtn = document.querySelector('#js-gray-btn');
myGrayBtn.addEventListener('click', () => {
    isClickedTwice = !isClickedTwice;
    if (isClickedTwice){
        myGrayBtn.style.backgroundColor = 'green';
    } else {
        myGrayBtn.style.backgroundColor = 'gray';
    }
});

const hoveredBtn = document.querySelector('#js-hovered-btn');
hoveredBtn.addEventListener('mouseenter', () => {
    hoveredBtn.style.backgroundColor = 'red';
});
hoveredBtn.addEventListener('mouseleave', () => {
    hoveredBtn.style.backgroundColor = 'initial';
});

window.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    console.log('Mouse right button is clicked');
});

const myForm = document.querySelector('#js-form');
const myInput= document.querySelector('#js-input');

myInput.addEventListener('keyup', (event) => {
    console.log('event', event);
    console.log('input value', myInput.value);
})

myForm.addEventListener('submit', () => {
    event.preventDefault();
    if (myInput.value) {
        alert(`Your input is ${myInput.value}`);
    }
});





