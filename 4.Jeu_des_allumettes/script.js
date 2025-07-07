//On décrit le jeu des allumettes : au départ, il y a un tas de 50 allumettes, (ou tout autre objet : cailloux, jetons, . . .).
//Chacun à son tour, les deux joueurs ôtent obligatoirement entre 1 et 6 allumettes. Celui qui ôte la dernière allumette gagne.

//Étape 1 : Faire une fonction qui prend en paramètre le nombre d'allumettes à enlever du reste.
//Pour rappel, une nom de fonction doit décrire clairement ce que fait celle-ci. --> c'est pas clair et ça me juste fait bugger e_e


//Étape 2 : Demander a l'utilisateur combien d'allumettes il souhaite retirer tant qu’il y a des allumettes dans le tas. 
//Pour rappel, on a 50 allumettes au départ. --> c'est plus simple de faire l'étape 1 après avoir lu ça pour le coup
//---------------------------------------------------------------------Variables--------------------------------------------------------------//

let numberOfMatches = 50 // We are starting the game with a total of 50 matches


//---------------------------------------------------------------------Fonctions--------------------------------------------------------------//

function askANumberOfMatches(){
    let askedMatches = parseInt(prompt("Choisissez le nombre d'allumettes à enlever entre 1 et 6"))

    while (askedMatches < 1 || askedMatches > 6){
        alert("veuillez choisir un nombre entre 1 et 6")
        askedMatches = parseInt(prompt("Choisissez le nombre d'allumettes à enlever entre 1 et 6"))
    }

    if(askedMatches >= 1 && askedMatches <= 6){
        removeMatches(askedMatches)
    }
    

}

function removeMatches(matchesRemoved){
    numberOfMatches -= matchesRemoved

    console.log(numberOfMatches) // ptite vérif
}

askANumberOfMatches()