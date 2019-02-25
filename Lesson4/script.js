'use strict'

// Logguez dans la console 'Hello' 3 secondes après le rendu de la page.
setTimeout(() => {
    console.log('Hello');
}, 3000);


// Logguez dans la console 'Logged after 5 seconds' 5 secondes après le rendu de la page.
setTimeout(() => {
    console.log('Logged after 5 seconds');
}, 5000);


// Ajoutez un écouteur d'événement 'click' à l'objet window pour logguer dans la console 'Clicked' 3 secondes après le clique.
window.addEventListener('click', () => {
    setTimeout(() => {
    console.log("Clicked");
    }, 3000);
});


// Créez un div. Au survol de ce div logguez dans la console 'I was hovered 5.5 seconds ago' 5 secondes plus tard.
const div = document.getElementById('idk')
div.addEventListener('mouseover', () => {
    setTimeout(() => {
        console.log("Survol");
    }, 5500);
});


// Créez dynamiquement une image avec src égal à http://lorempixel.com/400/200/.
// Quand l'image sera entièrement chargée, logguez dans la console 'Done!' et l'affichez sur la page.
// En cas d'erreur de chargement, logguez dans la console 'Error'
const myImg = document.createElement('img');
myImg.src = 'https://lorempixel.com/400/200/';
myImg.onload = () => {
    console.log('Done');
    document.body.appendChild(myImg)
}
myImg.onerror = () => {
    console.log('Error');
}

// Créez dynamiquement une node de script avec l'url de la librarie lodash: https://cdn.jsdelivr.net/npm/lodash@4.17.11/lodash.min.js.
// Quand le script sera téléchargé, appelez la fonction round pour arrondir le nombre 10.02.

const no_de = document.createElement('script');
const number = (10.02);
no_de.src = 'https://cdn.jsdelivr.net/npm/lodash@4.17.11/lodash.min.js';
no_de.onload = () => {
    console.log('Done');
    console.log(_.round(10.02));
}
document.body.appendChild(no_de);

// Récupérez l'information du profil de Han Solo (son id dans la base de données est 14). Ensuite affichez sur votre page ces données: nom, sexe, date de naissance, couleur des yeux, couleur des cheveux.

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = () => {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      console.log(xhttp.responseText);
      const rawValue = xhttp.responseText;
      const parsedValue = JSON.parse(rawValue);

      const hanSoloData =`
        <p>Nom : ${parsedValue.name}</p>
        <p>Sexe : ${parsedValue.gender}</p>
        <p>Date de naissance : ${parsedValue.birth_year}</p>

      `;
      document.querySelector('#hansolo').innerHTML = hanSoloData;
    }
};
xhttp.open('GET', 'https://swapi.co/api/people/14/', true);
xhttp.send();

// Trouvez toutes les personnes avec le nom de famille Skywalker. Affichez leur profiles sur votre page.

let xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = () => {
    if (xhttp2.readyState == 4 && xhttp2.status == 200) {
        console.log(xhttp2.responseText);
        const rawValue = xhttp2.responseText;
        const parsedValue = JSON.parse(rawValue);

        parsedValue.results.forEach(person => {
            const myDiv = document.createElement('div');
            const personData =`
            <p>Nom : ${person.name}</p>
            <p>Sexe : ${person.gender}</p>
            <p>Date de naissance : ${person.birth_year}</p>

            `;
            myDiv.innerHTML = personData;
            document.body.appendChild(myDiv);
        });
    }
};
xhttp2.open('GET', 'https://swapi.co/api/people/?search=skywalker', true);
xhttp2.send();

// Récupérez et affichez les données de 5 planètes avec les ids suivants:

const planets = [1, 2, 3, 4, 5];
let xhttp3 = new XMLHttpRequest();


planets.forEach(planet => {
    xhttp3.onreadystatechange = () => {
        if (xhttp3.readyState == 4 && xhttp3.status == 200) {
            console.log(xhttp3.responseText);
            const rawValue = xhttp3.responseText;
            const parsedValue = JSON.parse(rawValue);
                const myDiv = document.createElement('div');
                const planetData =`
                <p>Nom : ${parsedValue.name}</p>
                <p>Climat : ${parsedValue.climate}</p>
                `;
                myDiv.innerHTML = planetData;
                document.body.appendChild(myDiv);

        }

    };
    xhttp3.open('GET', 'https://swapi.co/api/planets/' + planet, true);
    xhttp3.send();
})

// Créez une promise (promesse) qui retourne une chaîne de caractères 'Hello' immediatement. Récupérez et logguez la valeur qu'elle retourne.
const myPromise = new Promise((resolve, reject) => {
    resolve('Hello');
})

myPromise.then(result => console.log('result', result));

// Créez une promise qui retourne une chaîne de caractères 'Hello' dans 3 secondes. Récupérez et logguez la valeur qu'elle retourne.
const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello');
    }, 3000)
});
myPromise2.then(result => console.log('result', result));

// Créez une promise qui retourne une erreur 'Something went wrong!'. Récupérer et logguez cette erreur.
const myPromise3 = new Promise((resolve, reject) => {
    reject('Something went wrong !');
})
myPromise3
    .then(res => console.log(res))
    .catch(error => console.error(error));

// Créez une promise qui retourne un nombre N. Enchaînez le traitement de la promise pour effectuez les operations suivantes:
// multiplier N par 2
// ensuite soustraire 1
// ensuite decrementer de 2
// ensuite augmenter de 10. Logguez le résultat réçu.

const getNum = new Promise((resolve, reject) => {
    resolve(10);
})

getNum
    .then(num => num *2)
    .then(num => num -1)
    .then(num => num -= 2)
    .then(num => num += 10)
    .then(num => {
        console.log('result', num);
    })
    .catch(error => {
        console.error(error);
    })


// Créez une fonction qui prend un nombre comme parametre et qui retourne une promise. Si le nombre passé est supérieur à 5 la promise est résolue avec succès, sinon la promise retourne une erreur 'Le nombre passé est trop grand'. Appelez la fonction créée et récupérez la valeur retournée par la promise.

function myFunc (nombre) {

    return new Promise((resolve, reject) => {
        if (nombre > 4) {
            resolve(nombre)
        }
        if (nombre < 5) {
            reject('Le nombre passé est pas assez trop grand')
        }
    })
}

myFunc(6)
.then(idk => console.log(idk))
.catch(arror => {
    console.error(error);
})
console.log(myPromise);

// Placeholder API: https://jsonplaceholder.typicode.com/
// Récupérez et affichez un article avec l'id 25, ensuite récupérez et affichez ses commentaires.
fetch('https://jsonplaceholder.typicode.com/posts/25')
    .then(response => response.json())
    .then(result => {
        console.log('result', result);
        fetch('https://jsonplaceholder.typicode.com/posts/25')
            .then(response2 => response2.json())
            .then(comments => {
                console.log()
            })

    });

    
// Créez un formulaire d'inscription. A la soumission du formulaire envoyez une requête pour créez un nouvel utilisateur. Sauvegardez ces données dans les cookies.
const userdata = {
    email: 'test@ynov.com',
    password: 'azerty'
}
fetch('https://reqres.in/api/register', {
    method: 'POST',
    body: JSON.stringify(userdata),
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(response => response.json())
    .then(result => console.log('result', result));


// Utilisez l'API de https://reqres.in/ et la méthode fetch qui retourne une promise.
// Récupérez et affichez les informations de l'utilisateur avec l'id 5.

fetch('https://reqres.in/api/users/5', {
    method: 'POST',
    body: JSON.stringify(userdata),
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(response => response.json())
    .then(result => console.log('result', result));

// Créez un formulaire pour modifier le nom de l'utilisateur sauvegardé dans les cookies. Mettez à jour les données sauvegardées.

