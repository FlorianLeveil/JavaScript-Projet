'use strict'

document.cookie = 'lang=fr'

document.cookie = 'previewSeen = true;expires=' + new Date('2019-02-12');

docCookies.setItem('test', 'test', new Date('2019-12-31'));

docCookies.setItem('userId', 123);

console.log(docCookies.getItem('userId'), typeof docCookies.getItem('userId'));

docCookies.setItem('userId', 321);

docCookies.removeItem('userId');

const user = {
    id: 1,
    name: 'Thibaud'
}
docCookies.setItem('user', JSON.stringify(user));
const myObj = docCookies.getItem('user');
console.log('myObj', myObj);
console.log('myObj parsed', JSON.parse(myObj));

if (localStorage) {
    localStorage.setItem('greeting', 'Hello World');
    localStorage.getItem('greeting');
}

if (navigator.geolocation) {
    const successCallback = (position) => {
        console.log('position', position);
        const link = document.createElement('a');

        link.setAttribute('href', `https://www.latlong.net/c/?lat=${position.coords.latitude}&long=${position.coord.longitude}`);

        link.setAttribute('target', '_blank');
    }

    const errorCallback = (error) => {
        console.log('error', error);
    }
    
    navigator.geolocation.getCurrentPosition(successCallback,errorCallback);
}

const dragZone = document.querySelector('#js-drop-to');
const draggable = document.querySelector('#js-draggable');

draggable.addEventListener('dragstart', event => {
    event.dataTransfer.setData('text', event.target.id);
});

dropZone.addEventListener('dragover', (event) => {
    event.preventDefault();
});

dropZone.addEventListener('drop', event => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    const el = document.getElementById(data);
    dropZone.appendChild(el);
});

const canvas = document.querySelector('canvas');
console.log(canvas);
const ctx = canvas.getContext('2d');

const getCoordinatesInCanvas = (canvasEl, event) => {
    const rect = canvasEl.getBoundingClientRect(); // récupérer la taille de <canvas> et sa position relative par rapport à la zone d'affichage
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    console.log(x: ${x}, y: ${y});
}
canvas.addEventListener('click', (event) => {
    getCoordinatesInCanvas(canvas, event);
})

ctx.strokeStyle = 'white'
ctx.fillStyle = 'white'

// HEAD
ctx.beginPath();
ctx.arc(200, 180, 60, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

// BODY
ctx.beginPath();
ctx.arc(200, 180, 120, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

// HAT
ctx.strokeStyle = 'black';
ctx.fillStyle = 'black';
ctx.fillRect(126, 131, 130, 30);
ctx.fillRect(155, 52, 90, 100);

// EYES
ctx.beginPath();
ctx.arc(176, 176, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(216, 176, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

// ARM
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(130, 309);
ctx.lineTo(41, 255);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(266, 310);
ctx.lineTo(359, 229);
ctx.stroke();

// NOSE
ctx.lineWidth =1;
ctx.strokeStyle = 'orange';
ctx.fillStyle = 'orange';
ctx.beginPath();
ctx.moveTo(198, 188);
ctx.lineTo(125, 207);
ctx.lineTo(197, 214);
ctx.quadraticCurveTo(207, 200, 198, 198);
ctx.stroke();

// SCARF
ctx.strokeStyle = 'indigo';
ctx.fillStyle = 'indigo'
ctx.fillRect(165, 232, 78, 18);
ctx.fillRect(209, 245, 23, 80);
