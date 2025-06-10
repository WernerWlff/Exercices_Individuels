
/* Étape 2 : premier code

//let message = "Bonjour"
//console.log(message)
// on vérifie que la variable message nous rends bien le bon message

//let firstName = "Beyonce"
//message = `Bonjour ${firstName} !` // changement de la variable de message cf. énoncé
//console.log(message)
*/

/* Étape 3 : dans une fonction

function sayHello(name){ // je change le nom de la variable pour qu'on puisse l'appeler sans que ça ne bug

    let message = "Bonjour"
    let firstName = "Beyonce"
    message = `Bonjour ${firstName} !`
    console.log(message)
}
//sayHello(firstName)

sayHello() // l'appel de fonction permet de re afficher "Bonjour Beyonce !"

*/

// Étape 4 : un second paramètre
// j'ai bien réussi le faire de cette façon mais je n'ai pas réutiliser les variables définies plus haut
function sayHello(name, hour){
    if (hour < 18 ){
        console.log(`Bonjour ${name} !`)
    }  else {
        console.log(`Bonsoir ${name} !`)
    }
}

sayHello("Beyonce", 11)
sayHello(`Beyonce`, 18)
sayHello(`Beyonce`, 17)