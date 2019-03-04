'use sctrict'

// Quand le rendu de la page sera terminé, utilisez les selecteurs jQuery pour sélectionner et logguer:
// toutes les balises <div>
$('div');
console.log('all divs', $('div'));

// toutes les balises avec le nom de classe js-paragraph
$('js-paragraph');
console.log('select by class name', $('.js-paragraph'));

// la balise avec l'id js-unique-paragraph
// le premier titre <h3>
$('h3:first');
console.log('le premier titre <h3>', $('h3:first'))

// le premier <th> du premier <tr>
console.log('le premier <th> du premier <tr>', $('tr:first th:first'));

// le premier <td> du chaque <tr>
console.log('le premier <td> de chaque <tr>', $('tr td:first'));

// tous les liens
console.log('tous les liens', $('a'));


// tous les lien externes (ceux qui ont l'attribut target égal à _blank)
console.log('Tous les liens externes', $('a[target="_blank"]'));

// tous les lien internes (ceux qui n'ont pas d'attribut target égal à _blank)
console.log('tous les liens qui ne sont pas blanc', $('a[target!="_blank"]'));

// tous les boutons dans un formulaire
$(document).ready(() => {
    //tous les boutons dans un formulaire
    $('form :button');
})


// DOM

// Utilisez les méthodes text, html, val, attr pour travailler avec le HTML suivant.
// Récupérez et logguez dans la console le contenu du titre de la page.
const h1text = $('h1').text();
console.log('h1text', h1text);

// Changez le contenu du titre de la page à 'My page title'.
$('h1').text('My âge title');

// Récupérez et logguez dans la console le HTML de l'article.
const articleHTML = $('#js-article').html();

// Changez le contenu de l'article à
// <h2>This is my article.</h2>
// <p>This is my article's content.</p>
// <a href="https://example.com">Read more</a>
$('#js-article').html(`
<h2>This is my article.
</h2><p>This is my article's content.</p>
`);

// Récupérez et logguez dans la console la valeur du champ de saisie avec l'id js-search.
const inputValue = $('#js-search').val();

// Changez la valeur du champ de saisie à 'Beagles'
$('#js-search').val('Beagle');

// Récupérez et logguez dans la console la valeur du placeholder du champ de saisie.
// Changez la valeur du placeholder du champ de saisie à 'Search'
// TRAVAIL PARTIQUE: search

$('#js-search-form')[0].addEventListener('submit',(event) => {
    event.preventDefault();
    const input2Value = $('#js-search2').val();
    if (input2Value == 'Chat') {
        $('#js-search-result').text('Miouuuuuuw!');
      } else {
        $('#js-search-result').html("<p>All new content for <strong> " + input2Value + "</strong></p>");
    }
})

// MANIPULER LE CSS

// Ajoutez la classe 'alert-primary' au <div>.
$('#js-alert').addClass('alert-primary');

// Supprimez la classe 'alert' du <div>. Supprimez la classe 'alert-primary' du <div>.
$('#js-alert').removeClass('alert-primary');

// Ajoutez d'un coup les classes 'alert' et 'alert-warning' au <div>.
$('#js-alert').addClass('alert alert-warning');

// Vérifiez si le <div> possède déjà la classe 'alert-warning'. Si oui, supprimez-la.
if ($('#js-alert').hasClass('alert-warning')){
    $('#js-alert').removeClass('alert-warning');
}

// En cliquant sur le bouton #js-btn, basculez la classe 'alert-success': premier clique ajoute la classe, deuxième clique l'enlève, troisième l'ajoute de nouveau, etc.
$('#js-btn')[0].addEventListener('click', () => {
    $('#js-alert').toggleClass('alert-success');
})

// Récupérez et logguez dans la console la couleur du fond du bouton.
console.log($('#js-btn').css('background-color'));

// Passez la couleur du fond du bouton en #71b8af.
console.log($('#js-btn').css('background-color', '#71b8af'));

// Changez d'un coup la couleur du texte du bouton à #fff2d5 et le radius de la bordure à 3px.
$('#js-btn').css({
    color: '#fff2d5',
    'border-radius': '3px'
});


// TP PATRIQUE
//   <div class="alert alert-danger" id="js-danger-alert">
//     <p>My alert</p>
//     <button class="btn btn-success" id="js-danger-alert-btn">Ok</button>
//   </div>
//   Vérifiez si le <div> a la classe alert-danger. Si oui, ajoutez la classe text-danger au <p> et supprimez la classe btn-success du bouton. Au clique sur le bouton ajoutez la propriété css display égale à none au <div>.

if ($('#js-danger-alert').hasClass('alert-danger')){
    $('#js-danger-alert p').addClass('text-danger');
    $('#js-danger-alert-btn').removeClass('btn-success');

    $('#js-danger-alert-btn')[0].addEventListener('click', () => {
        $('#js-danger-alert').css({
            display: 'none',
        });
    })
}

// 03 EVENTS
// Créez un bouton. Si ce bouton est cliqué, logguez dans la console 'Clicked!'. Si ce bouton est cliqué plus de 5 fois, enlevez son écouteur d'événement 'click'.
let counter = 0;

$('#js-btn2').click(() => {
    console.log('Clicked');
    counter++;
    if (counter > 5){
        $('#js-btn2').off('click');
    }
    console.log('Counter', counter);
});

// Créez un div bleu. Si on le survole, il passe en vert. Si on sort le curseur du div, il redevient bleu. Utilisez les méthodes mouseenter, mouseleave ou hover.
$('#js-hovered').mouseenter(() => {
    $('#js-hovered').css('background-color', 'green');
})
$('#js-hovered').mouseleave(() => {
    $('#js-hovered').css('background-color', 'blue');
});


// Ajoutez un écouteur d'événement 'click' à l'objet window. Si cet événement est déclenché, ajoutez le HTML <p>Cette page a été cliquée <strong>une fois</strong></p> au body. Ajoutez un autre écouteur d'événement 'dblclick'. Si la page a été cliquée deux fois d'affilé, remplacez le HTML du body par <p>Cette page a été cliquée <strong>deux fois d'affilé</strong></p>.

$(window).click(() => {
    
});


// 04 EFFECTS ---------------------------------------------------------------------------------------------------------------------------
// Utilisez le HTML ci-dessus. Affichez l'alerte si le bouton #js-show-alert est cliqué. Cachez-la si le bouton #js-hide-alert est cliqué.

$('#js-show-alert').click(() => {
    $('#js-alert2').show();
});

$('#js-hide-alert').click(() => {
    $('#js-alert2').hide();
});

// Utilisez les méthodes slideUp, slideDown ou slideToggle pour afficher/cacher la bannière .js-slide-example-links sous le paragraphe #js-slide-example-1 si celui-ci est cliqué.

$('#js-slide-example-address').click(() => {
    $('#js-slide-example-links').slideToggle();
    // $('#js-slide-example-links').slideDown();
    // $('#js-slide-example-links').FadeIn();
    // $('#js-slide-example-links').slideOut();


})


// TRAVAIL PRATIQUE:
// Au clique sur le bouton avec l'id js-btn-fade-in faites apparaître le div avec l'animation fondu (fade in). Au clique sur le bouton avec l'id js-btn-fade-out faites disparaître le div avec l'animation fondu (fade out).

$('#js-btn-fade-in').click(() => {
    $('#js-div-fade-in-out').fadeIn();
})

$('#js-btn-fade-out').click(() => {
    $('#js-div-fade-in-out').fadeOut();
})

// ANIMATE
// Appliquez une animation au div #js-animation-1: ce <div> se deplace à 300px de gauche à droit en 700 millisecondes 3 secondes après la fin du rendu de la page. Utilisez les méthodes delay et animate.

$('#js-animation-1')
.delay(300)
.animate({
    left: '300px',
    width: '200px'
},700)
.animate({
    height: '400px'
})