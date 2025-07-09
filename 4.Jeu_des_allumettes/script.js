//---------------------------------------------------------------------DOM--------------------------------------------------------------------//
const ACCUEIL = document.getElementById('accueil') // pour récupérer la premiere partie ( affichage règles / je vais peut etre pas m'en servir)
const ALLUMETTES = document.getElementById('allumettes') // pour changer l'affichage d'un de nos h2
const NBARETIRER = document.getElementById('nbARetirer') // pour récupérer la valeur de notre input
const APPELFONCTION = document.getElementById('appelFonction') // pour éxecuter notre quiz
const JOUEURS = document.getElementById('joueurs') // pour afficher le tour du joueur
let nbRestantes = document.getElementById('nbRestantes') // pour voir le nombre d'allumettes restantes
//---------------------------------------------------------------------Variables--------------------------------------------------------------//

let numberOfMatches = 50 // We are starting the game with a total of 50 matches
let playerTurn = 1 // nombre de joueur minimum
let numbersOfPlayers = parseInt(prompt("Combien de joueurs vont jouer ?")) // on demande le nombre de joueurs --> on peut le laisser de cette façon

//---------------------------------------------------------------------Fonctions--------------------------------------------------------------//

APPELFONCTION.addEventListener("click", startTheGame) // ça vous permettre de relancer les test a chaque fois qu'on clique dessus


//Permet de faire démarrer notre jeu et de récupérer la valeur de notre input
function startTheGame(){
    const INPUTVALUE = parseInt(NBARETIRER.value) // on veut récupérer et vérifier si on peut démarrer le jeu
    isTheNumberGood(INPUTVALUE) // on éxécute nos fonctions avec la value de notre input
    JOUEURS.innerText = `C'est au tour de Joueur ${playerTurn}`
}


//Permet de vérifier si on a rentrer un nombre d'allumettes dans l'interval demandé
function isTheNumberGood(matchesToRemove){

    if(matchesToRemove < 1 || matchesToRemove > 6){
        
        ALLUMETTES.innerText = "Veuillez choisir un nombre entre 1 et 6"
    }

    else if(matchesToRemove >= 1 && matchesToRemove <= 6){
        removeMatches(matchesToRemove)
        ALLUMETTES.innerText = "Choissisez le nombre d'allumettes à retirer"
    }
    
    else {
        ALLUMETTES.innerText = "Vous n'avez pas rentré de nombre, veuillez réessayer"
    }
    
}


//Permet de changer le nombre d'allumettes restantes
function removeMatches(matchesToRemove){
    numberOfMatches -= matchesToRemove

    // on change l'affichage si la pile est vide ou non
    if(numberOfMatches > 0){
        nbRestantes.innerText = `Il ne reste plus que ${numberOfMatches} dans le tas`
        multiplayer()
    }

    else if(numberOfMatches <= 0){
        multiplayer()
        endTheGame()
    }
}

//Permet de faire le changement de joueur pour avoir une suite de joueurs
function multiplayer(){
    if(playerTurn <= numbersOfPlayers){
        playerTurn++

        if(playerTurn > numbersOfPlayers){
            playerTurn = 1
        }
    }
}


//Permet de changer l'affichage graphique pour lorsque la partie se termine
function endTheGame(){
    nbRestantes.innerHTML = `Il n'y a plus d'allumettes dans le tas, Félicitation joueur ${playerTurn} vous avez gagné le jeu des allumettes` +
                            `<br>` +
                            `<img id="gifEnd" src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTBkY3E2YjA3cTZsZnhkcnVmdW12cDY0YXM4anRjOHN5NW9maW41ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1qj43y8Fi75hTuTvCt/giphy.gif" alt="fin du jeu"/>`
    
    APPELFONCTION.style.display = "none" // on fait disparaitre le bouton suivant pour empecher le joueur de cliquer dessus
    NBARETIRER.style.display = "none" // On fait disparaitre l'input car il ne sert plus à rien
}
