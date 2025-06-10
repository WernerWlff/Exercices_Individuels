
//let message = "Bonjour"
//console.log(message)
// on vérifie que la variable message nous rends bien le bon message

//let firstName = "Beyonce"
//message = `Bonjour ${firstName} !` // changement de la variable de message cf. énoncé
//console.log(message)

function sayHello(firstName){

    let message = "Bonjour"
    message = `Bonjour ${firstName} !`
    console.log(message)
}
//sayHello(firstName)
sayHello() // l'appel de fonction permet de re afficher "Bonjour Beyonce !"