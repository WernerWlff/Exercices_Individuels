//---------------------------------------------------------------------DOM--------------------------------------------------------------------//
const ACCUEIL = document.getElementById('accueil') // pour récupérer la premiere partie ( affichage règles / je vais peut etre pas m'en servir)
const ALLUMETTES = document.getElementById('allumettes') // pour changer l'affichage d'un de nos h2
const NBARETIRER = document.getElementById('nbARetirer') // pour récupérer la valeur de notre input
const APPELFONCTION = document.getElementById('appelFonction') // pour éxecuter notre quiz
let nbRestantes = document.getElementById('nbRestantes') // pour voir le nombre d'allumettes restantes 
//---------------------------------------------------------------------Variables--------------------------------------------------------------//

let numberOfMatches = 50 // We are starting the game with a total of 50 matches
let playerTurn = 1 // nombre de joueur minimum
let numbersOfPlayers = parseInt(prompt("Combien de joueurs vont jouer ?")) // on demande le nombre de joueurs --> on peut le laisser de cette façon

//---------------------------------------------------------------------Fonctions--------------------------------------------------------------//

APPELFONCTION.addEventListener("click", CanStart) // ça vous permettre de relancer les test a chaque fois qu'on clique dessus

function CanStart (){
    const INPUTVALUE = parseInt(NBARETIRER.value) // on veut récupérer et vérifier si on peut démarrer le jeu
    askANumberOfMatches(INPUTVALUE) // on éxécute nos fonctions avec la value de notre input
}



// on change les résultats, avant on relançait le programme, maintenant on le lance a chaque clic donc pas besoin de le refaire
function askANumberOfMatches(matchesToRemove){

    if(matchesToRemove < 1 || matchesToRemove > 6){
        
        ALLUMETTES.innerText = "veuillez choisir un nombre entre 1 et 6"
    }

    else if(matchesToRemove >= 1 && matchesToRemove <= 6){
        multiplayer(matchesToRemove)
    }
    
    else {
        ALLUMETTES.innerText = "Vous n'avez pas rentré de nombre, veuillez réessayer"
    }
    
}

function multiplayer(matchesToRemove){
    if(playerTurn <= numbersOfPlayers){

        removeMatches(matchesToRemove)
        playerTurn++
        
        if(playerTurn > numbersOfPlayers){
            playerTurn = 1
        }
    }
}



function removeMatches(matchesToRemove){
    numberOfMatches -= matchesToRemove

    // on change l'affichage si la pile est vide ou non
    if(numberOfMatches >= 0){
        nbRestantes.innerText = `Il ne reste plus que ${numberOfMatches} dans le tas`
    }

    isFinished()
}

function isFinished(){
    if ( numberOfMatches  <=0 ){
        nbRestantes.innerText = `Il n'y a plus d'allumettes dans le tas,Félicitation joueur ${playerTurn} vous avez gagné le jeu des allumettes`
    }
}