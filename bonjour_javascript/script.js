
//let message = "Bonjour"
//console.log(message)
// on vérifie que la variable message nous rends bien le bon message

//let firstName = "Beyonce"
//message = `Bonjour ${firstName} !` // changement de la variable de message cf. énoncé
//console.log(message)

function sayHello(){

    let message = "Bonjour"
    let firstName = "Beyonce"
    message = `Bonjour ${firstName} !`
    console.log(message)
}
//sayHello(firstName)
// je n'ai pas réussi à avoir le message "Bonjour undefined !" mais "ReferenceError: firstName is not defined"

sayHello() // l'appel de fonction permet de re afficher "Bonjour Beyonce !"