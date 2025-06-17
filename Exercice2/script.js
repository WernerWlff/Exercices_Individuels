//Étape 1 : Créer une fonction qui demande un nombre à l’utilisateur à l’aide d’un prompteur
//          Stocker sa réponse dans une variable de type adéquat nommée givenNumber


//Étape 2 : Pour le moment nous allons considérer que le nombre à deviner est 22.
//          Écrire une fonction qui prend en paramètre givenNumber et qui se nommera didIWin

//Étape 3 : Désormais la fonction didIWin devra retourner true si l’utilisateur a trouvé le chiffre, false sinon
//          Dans la fonction gamePlay, si didIWin a retourné true, on arrete le jeu. En revanche, 
//          si elle a retourné false, on redemande un chiffre à l’utilisateur.


/* l'ancienne version avec while qui fait tout tout seul alors qu'on veut appeler la fonction lorsqu'on clic sur le bouton

function gamePlay(){

    const ANSWER = parseInt(chooseTheAnswer())
    let numberOfTry = 0
    let givenNumber = parseInt(chooseANumber())
    const Try = document.querySelector("#nbOfTry")

    //on s'en sers quand j'aurai changer la putain de boucle en appel de fonction quand je clic sur le bouton
    //const affichageGlobal = document.querySelector("body")
    //affichageGlobal.innerHTML = `Bravo Vous avez trouver le nombre 🥳`
    
    while (didIWin(givenNumber, ANSWER) != true){
        numberOfTry = numberOfTry + 1                                     // notre valeur à incrémenter de 1 à chaque appel de la fonction
        Try.innerHTML = `Vous etes rendu à votre ${numberOfTry}eme essai` // permet d'afficher notre nombre d'essai dans la page html
        givenNumber = parseInt(chooseANumber())
    }

}
*/

/* Obsolète car on se sert de la valeur dans l'input dans l'html
function chooseANumber(){
    return prompt("Choisissez un nombre")
}
*/

function chooseTheAnswer(limit){
    limit = prompt("Choisissez un nombre entre 1 et 50")
    while(limit < 0 || limit > 50){
        limit = prompt ("j'ai demandé un nombre entre 1 et 50 €_€, réessaye")
    }
    return limit
}

let varTamp = 0 // variable pour s'assurer que l'utilisateur rentre bien un nombre entre 1 et 50
const ANSWER = parseInt(chooseTheAnswer(varTamp))
let numberOfTry = 0
const nbEssai = document.querySelector("#nbOfTry")
const appelFonction = document.querySelector("#appelFonction")
const minus = document.querySelector('#minus')
const maximum = document.querySelector('#maximum')
const Corps = document.querySelector("body")

appelFonction.addEventListener("click", gameplay)

function didIWin(number, numberToGuess){
    if(number == parseInt(numberToGuess)){
        Corps.innerHTML = "<h1> Bravo ! Vous avez deviné le nombre 🥳 </h1>"
        
    } else if (number < numberToGuess){
        if (number > parseInt(minus.innerText)){
            minus.innerText = number
            numberOfTry = numberOfTry + 1
        }
        else {
            alert("le nombre proposé n'est pas dans la range")
        }

    } else if (number > parseInt(numberToGuess)){
        if (number < maximum.innerText){
            maximum.innerText = number
            numberOfTry = numberOfTry + 1
        }
        else {
            alert("le nombre proposé n'est pas dans la range")
        }
    }
}

function gameplay(){

    const appelInput = parseInt(document.querySelector("#test").value) // on mets le parseInt car sinon on comparera des strings dans la fonction
    didIWin(appelInput,ANSWER)
    nbEssai.innerHTML = `Vous avez réalisé ${numberOfTry} essais`
}
