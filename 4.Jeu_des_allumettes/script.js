//On décrit le jeu des allumettes : au départ, il y a un tas de 50 allumettes, (ou tout autre objet : cailloux, jetons, . . .).
//Chacun à son tour, les deux joueurs ôtent obligatoirement entre 1 et 6 allumettes. Celui qui ôte la dernière allumette gagne.

//Étape 1 : Faire une fonction qui prend en paramètre le nombre d'allumettes à enlever du reste.
//Pour rappel, une nom de fonction doit décrire clairement ce que fait celle-ci. --> c'est pas clair et ça me juste fait bugger e_e


//Étape 2 : Demander a l'utilisateur combien d'allumettes il souhaite retirer tant qu’il y a des allumettes dans le tas. 
//Pour rappel, on a 50 allumettes au départ. --> c'est plus simple de faire l'étape 1 après avoir lu ça pour le coup

//Étape 3 :Limiter le nombre d’allumettes à pouvoir être retirées de 1 à 6.
//Ajouter a votre jeu la notion de victoire.

//---------------------------------------------------------------------Variables--------------------------------------------------------------//

let numberOfMatches = 50 // We are starting the game with a total of 50 matches
let playerTurn = 1 // nombre de joueur minimum
let numbersOfPlayers = parseInt(prompt("Combien de joueurs vont jouer ?")) // on demande le nombre de joueurs

//---------------------------------------------------------------------Fonctions--------------------------------------------------------------//
function startTheGame(){
    while (!(numberOfMatches <= 0)){
        multiplayer()
    }
}

function multiplayer(){
    if(playerTurn <= numbersOfPlayers){
        askANumberOfMatches()
        playerTurn++
        
        if(playerTurn > numbersOfPlayers){
            playerTurn = 1
        }
    }
}

function askANumberOfMatches(){
    // demande initiale
    let askedMatches = parseInt(prompt("Joueur " + playerTurn + ": Choisissez le nombre d'allumettes à enlever entre 1 et 6"))

    while (askedMatches < 1 || askedMatches > 6){
        
        alert("veuillez choisir un nombre entre 1 et 6")
        
        // demande renvoyée car la première demande n'est pas correcte
        askedMatches = parseInt(prompt("Joueur " + playerTurn + ": Choisissez le nombre d'allumettes à enlever entre 1 et 6")) 
    }

    if(askedMatches >= 1 && askedMatches <= 6){
        removeMatches(askedMatches)
    }
    
}

function removeMatches(matchesRemoved){
    numberOfMatches -= matchesRemoved

    // on change l'affichage si la pile est vide ou non
    if(numberOfMatches > 0){
        alert(`Il ne reste plus que ${numberOfMatches} dans le tas`)
    }

    isFinished()
}

function isFinished(){
    if ( numberOfMatches  <=0 ){
        alert(`Il n'y a plus d'allumettes dans le tas,Félicitation joueur ${playerTurn} vous avez gagné le jeu des allumettes`)
    }
}

startTheGame()