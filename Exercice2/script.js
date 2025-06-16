//Étape 1 : Créer une fonction qui demande un nombre à l’utilisateur à l’aide d’un prompteur
//          Stocker sa réponse dans une variable de type adéquat nommée givenNumber

function chooseANumber(){
    return prompt("Choisissez un nombre")
}

//let givenNumber = parseInt(chooseANumber()) --> on change la position dans gamePlay()


//Étape 2 : Pour le moment nous allons considérer que le nombre à deviner est 22.
//          Écrire une fonction qui prend en paramètre givenNumber et qui se nommera didIWin

//Étape 3 : Désormais la fonction didIWin devra retourner true si l’utilisateur a trouvé le chiffre, false sinon
//          Dans la fonction gamePlay, si didIWin a retourné true, on arrete le jeu. En revanche, 
//          si elle a retourné false, on redemande un chiffre à l’utilisateur.

function didIWin(number){
    if(number == 22 ){
        alert("Bravo ! Vous avez deviné le nombre")
        return true
    } else if (number < 22){
        alert("Plus grand")
        return false
    } else if (number > 22 ){
        alert("Plus petit")
        return false
    }
}

function gamePlay(){
    
    let givenNumber = parseInt(chooseANumber())
    while (didIWin(givenNumber) != true){
        givenNumber = parseInt(chooseANumber())
    }

}

gamePlay()