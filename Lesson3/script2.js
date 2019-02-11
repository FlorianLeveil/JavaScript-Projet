'use strict';
/*
const dropZone = document.querySelector('#js-drop-to')
const draggable = document.querySelector('#js-draggable')

draggable.addEventListener('dragstart', event => {
    event.dataTransfer.setData('text', event.target.id)
})

dropZone.addEventListener('dragover', event => {
    event.preventDefault();
})

dropZone.addEventListener('drop', event => {
    event.preventDefault()
    const data = event.dataTransfer.getData('text')
    const el = document.getElementById(data)
    dropZone.appendChild(el);
}) */


const ACCEPTED_FORMATS = ['image/jpeg', 'image/png', 'image/svg'];
const MAX_IMG_SIZE = 300 * 1024; // 30 Kb
const dropZone = document.querySelector('#js-drop-to');
const filesList = document.querySelector('#js-file-list');

// On défini les evenements à ecouter
// On vérifie si un element est drag sur un target valide
dropZone.addEventListener('dragover', (e) => onDragOver(e));
// On vérifie si un element est drop sur un targer valide
dropZone.addEventListener('drop', (e) => onDrop(e));
// On vérifie si un element est grad au dessus d'un element valide
dropZone.addEventListener('dragenter', () => changeDropZoneState(true));
// On vérifie si un element draggé sort d'un element valide
dropZone.addEventListener('dragleave', () => changeDropZoneState(false));

function onDragOver(event) {
    // On enleve les comportements par défault
    event.stopPropagation();
    event.preventDefault();
}

function onDrop(e) {
    // On enleve les comportements par défault
    e.stopPropagation();
    e.preventDefault();

    // On recupere la liste des fichiers 
    // Puis on créer un liste contenant les infos sur les images (nom de fichier)
    // Et on crée une liste et on appelle la fonction hundleUploadedFile pour f=chaque fichier
    filesList.innerHTML = '';
    const filesUploaded = Array.from(e.dataTransfer.files);
    filesUploaded.forEach((file, index) => handleUploadedFile(file, index));
    changeDropZoneState(false);

}
// Change le CSS
function changeDropZoneState(isDragging) {
    isDragging ?
        dropZone.classList.add('js-is-dragged-over') :
        dropZone.classList.remove('js-is-dragged-over');
}

// Si pas d'erreur, appelle la fonction createListEl en ajoutant ce que retourne la fonction
// dans filesList
function handleUploadedFile(file, index) {
    const error = getUploadError(file);
    error ?
        console.warn(`"${file.name}" Upload Error: ${error}`) :
        filesList.appendChild(createListEl(file, index));
}

// Ajoute au HTML La liste des images recupérer avec une miniature et le nom
function createListEl(file, index) {
    const el = document.createElement('li');
    el.setAttribute('id', 'file-list-item-' + index);
    el.className = 'list-group-item file-list-item';

    // add image
    const elPreview = document.createElement('img');
    elPreview.classList.add('file-list-item-preview');
    el.appendChild(elPreview);
    renderImage(file, 'file-list-item-' + index);

    // add name
    const elName = document.createElement('p');
    elName.classList.add('file-list-item-name');
    elName.innerText = file.name;
    el.appendChild(elName);

    return el;
}

// render les images
function renderImage(file, elId) {
    const reader = new FileReader();
    reader.onload = (e) => {
        const img = document.querySelector(`#${elId} img`);
        img.setAttribute('src', e.target.result);
    }
    reader.readAsDataURL(file);
}
// Gere les erreurs
function getUploadError(file) {
    if (file.size > MAX_IMG_SIZE) {
        return 'Your image is too big';
    } else if (!ACCEPTED_FORMATS.includes(file.type)) {
        return 'Image of this format is not accepted';
    } else {
        return;
    }
}