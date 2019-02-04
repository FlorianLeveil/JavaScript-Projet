'use strict';

console.log('Bonjour');

let username = 'Jeremy';
const userStatus = 1;


// Enchaînez (concatenate) deux chaînes de caractères: 'Hello' et 'World'.
let str1 = 'Hello';
let str2 = 'World';

console.log(str1 + str2);
//Ajoutez 10 et 32. Incrémentez le résultat de 8 avec l'opérateur +=.
let str10 = 10;
let str20 = 32;
let str30 = str10 + str20

console.log(str10 + str20)
console.log(str30 += 8)

//Soustrayez 5 de 10. Décrémentez le résultat de 5 avec l'opérateur -=.
let str40 = 10
console.log(str40 -= 5)
//Multipliez 5 par 7. Multipliez le résultat par 2 avec l'opérateur *=.
let str50 = 5
let str60 = 7
let str70 = str50 * str60
console.log (str70 *= 2 )

//Divisez 10 par 2. Divisez le résultat par 2 avec l'opérateur /=.
let str80 = 10/2
console.log (str80 /= 2)

//Déclarez une variable avec la valeur 5. Incrémentez-la de 1 avec l'opérateur ++.
let str90 = 5
console.log()

//Déclarez une variable avec la valeur 5. Décrémentez-la de 1 avec l'opérateur --.
let str100 = 5
console.log()


// Ecrivez en ligne de code un moyen de vérifier si 2 est supérieur à 1.
console.log('2 > 1', 2 > 1); // true

//Ecrivez en ligne de code un moyen de vérifier si 2 est inférieur à 1.
console.log('2 < 1', 2 < 1); // false

//Ecrivez en ligne de code un moyen de vérifier si 20 est supérieur ou égal à 10.
console.log('20 >= 10', 20 >= 10); // true

//Ecrivez en ligne de code un moyen de vérifier si 10 est supérieur ou égal à 10.
console.log('10 >= 10', 10 >= 10);


//Ecrivez en ligne de code un moyen de vérifier si 4 n'est pas égal à 6.
console.log('4 != 6', 4 != 6);

//Ecrivez en ligne de code un moyen de vérifier si '2' est égal à 2 avec l'opérateur d'égalité stricte.
console.log("'2' == 2", '2' ==2);

//Ecrivez en ligne de code un moyen de vérifier si 0 n'est pas égal à '0'.
console.log("'0' !==0", '0' !==0);

//Ecrivez en ligne de code un moyen de vérifier si 'hello' est égal à 'hello'.

//Ecrivez en ligne de code un moyen de vérifier si 'hello' est égal à 'Hello'.




// let isprivate = true;
// let ismember = false

let isprivate = true;
let ismember = true;

// let isprivate = false;
// let ismember = true

if (isprivate === false || (isprivate === true && ismember === true)) {
    console.log('can see the group');
} else {
    console.log('can\'t see the group')
}




if (5>0 || 5>10) {
    console.log('1');
} else {
    console.log('2');
}

let a = 20/2;
if (a > 10 || a < 15) {
    console.log('YES');
} else {
    console.log('NO');
}


 /*if (condition) {
    console.log('1');
} else if (condition2) {
    console.log('2');
} else {

} */

const today = 'Jeudi'

switch (today){
    case 'Lundi':
        console.log(` Aurjoud'hui on est ${today}`)
        break;
    case 'Mardi':
        console.log(` Aurjoud'hui on est ${today}`)
        break;
    case 'Mercredi':
        console.log(` Aurjoud'hui on est ${today}`)
        break;
    case 'Jeudi':
        console.log(` Aurjoud'hui on est ${today}`)
        break;
    case 'Vendredi':
    case 'Samedi':
        console.log(` Aurjoud'hui on est Vendredi ou Samedi`)
        break;
}

let userlol = prompt('What is your name');
console.log('Username', userlol);


if (userlol){
    alert(` Niceto meet you ${userlol}`)

} else {
    alert(`Don't be shy !`)
}

userlol !== null ?
    alert(` Niceto meet you ${userlol}`):
    alert(`Don't be shy !`);


// Fonction

function myFunc(text) {
// code here
    console.log('Hello World');
    return
}
console.log('myFunc',myFunc());

const myFunc2 = (text) => {
    // code here
    return TextTrackList;
}
console.log(myFunc2());

const sum = (p1, p2 = 0) => {
    return p1 + p2;
}

console.log(sum(4, 10));


// Créez une fonction qui tronque la chaîne de caractères. Elle prend la chaîne de caractères, la longeur et la traînée (..., ->, etc) en tant que paramètres. Donnez une valeur par défaut à la traînée.

const truncate = (str, length,trail = '...') => {
    if (str.length > length) {
        return str.substring(0,length) + trail
    } else {
        return str
    }
}

const res1 = truncate('I will be truncated', 15, '->') // returns 'I will be trunc->'
const res2 = truncate('I will be truncated', 5) // returns 'I wil...'

console.log('res1', res1);
console.log('res1', res1);

// Créez un tableau qui contient 3 de vos sites web préférés.
const myArray = [1, 'hello', [1,2,3]]
console.log('myArray', myArray);
console.log(typeof myArray);
// Loggez le premier élément de ce tableau.
console.log(myArray[0]);
// Loggez le second élément de ce tableau.
console.log(myArray[1]);
// Loggez le nombre d'éléments de ce tableau.
console.log(myArray.length);
// Loggez le dernier élément de ce tableau avec de l'aide de la propriété .length.
console.log(myArray[myArray.length-1])

const arr = [0,1,2,3,4,5];
arr.map(x => {
    console.log('x', x);
    return x /2;
})

let res = []
arr.forEach(nume => {
    console.log('nume', nume);
    res.push(nume/2);
})
console.log('res', res);

/* const myArr = [1,2,3];
const myArr2 = myArr;
myArr2[0] = 0;
console.log(myArr)
console.log(myArr2)
*/

const myArr = [1,2,3];
const myArr2 = [...myArr];

const user = {
    id: 1,
    name: 'Jeremy',
    email: 'email@ynov.com',
    car: {
        color: 'red',
    },
    test: [1,2,3],
}
// Créez un objet avec les valeurs suivantes: id = 1, name = Jeremy, email = jeremy@ynov.com.
// Loggez l'id de cet objet avec un point.
console.log(user.id);

// Loggez l'id de cet objet avec les crochets.
console.log(user['id']);
console.log(user['car'].color);

const myProp = 'car';
console.log(user[myProp].color);

// Déclarez une variable avec la valeur 'name'. Accédez à la propriété 'name' de votre objet par cette variable et les crochets [].
// Changez la valeur d'id dans votre objet à 2.
// Ajoutez à votre objet une nouvelle propriété 'human' de valeur true.
// Changez la valeur de la propriété 'email' à undefined.

// Calculez le prix total d'achat avec .reduce(), .forEach() ou .map().

const cart = [
  { item: 'a', price: 2, quantity: 1 },
  { item: 'b', price: 3, quantity: 1 },
  { item: 'c', price: 4, quantity: 1 },
];

const res5 = cart.reduce((acc, curVal) => {
    console.log('acc', acc);
    console.log('curVal', curVal);
    return acc += curVal.price * curVal.quantity
}, 0);

console.log('res5', res5);

//Debug

let myCharacter = 'Luna Lovegood';

function useSortingHat(char) {
  let choice = ''
  
  switch (char) {
    case 'Harry Potter':
      choice = 'Gryffindor';
    case 'Draco Malfoy':
      choice = 'Ravenclaw';
    case 'Luna Lovegood':
      choice = 'Ravenclaw';
    default:
      'Gryffindor'
  }
  return (choice)
}

const checkMyGringottsAccount = () => {
  let myMoney = Math.random() * 100;

  if (myMoney > 0 || myMoney < 30) {
    return 'Hello Weasley'
  } else if ( myMoney > 30 ||  myMoney < 75 ) {
    return 'Hey, that\'s cool'
  } else {
    return ('You\'re reach!')
  }
}

const myCharacterHouse = useSortingHat(myCharacter);

const isMyCharacterRich = checkMyGringottsAccount();


