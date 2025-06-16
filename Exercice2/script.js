//Étape 1 : Créer une fonction qui demande un nombre à l’utilisateur à l’aide d’un prompteur
//          Stocker sa réponse dans une variable de type adéquat nommée givenNumber

function chooseANumber(){
    return prompt("Choisissez un nombre")
}

let givenNumber = parseInt(chooseANumber())
