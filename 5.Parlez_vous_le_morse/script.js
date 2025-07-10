import { latinToMorse } from "./dictionnaire.js"
import { morseToLatin } from "./dictionnaire.js"

//-------------------------------------------------------------------DOM---------------------------------------------------------------------//
const LATINSIDE = document.querySelector('#latinSide')
const MORSESIDE = document.querySelector('#morseSide')
const LATINTEXT = document.getElementById('latinText')
const MORSETEXT = document.getElementById('morseText')

//------------------------------------------------------------Latin --> Morse----------------------------------------------------------------//

function getLatinCharacterList(messageToChange){
    let stringToArray = messageToChange.split('')
    return stringToArray // tableau de notre message
}

function translateLatinCharacter(letter){
    return latinToMorse[letter.toUpperCase()]

}

function encode(){
    let message = prompt('Saissisez le message que vous voulez traduire en morse')
    let traductionInMorse = getLatinCharacterList(message)
    //console.log(traductionInMorse) //---> à ce moment la, on récupère le tableau de notre message
    let messageInMorse = ""

    //on transforme nos lettres
    for(let i = 0; i < traductionInMorse.length; i++){
        traductionInMorse[i] = translateLatinCharacter(traductionInMorse[i])
        console.log(traductionInMorse[i])
    }

    //on écrit dans la variable message a la place
    for(let i = 0; i < traductionInMorse.length; i++){
        messageInMorse = messageInMorse + traductionInMorse[i]
    }

    console.log(messageInMorse)

}


//------------------------------------------------------------Morse --> Latin----------------------------------------------------------------//

//On récupère notre message
function getMorseCharacterList(morseToChange){
    let morseToArray = morseToChange.split(' ')
    return morseToArray
}

//On transforme le message
function translateMorseCharacter(symbols){
    return morseToLatin[symbols]
}

function decode(){
    let morseMessage = prompt('Saissisez le message en morse que vous voulez traduire en latin')
    let traductionInLatin = getMorseCharacterList(morseMessage)
    let messageInLatin = ""

    //on va transformer notre code en morse en lettres
    for(let i = 0; i < traductionInLatin.length; i++){
        
        traductionInLatin[i] = translateMorseCharacter(traductionInLatin[i])
    }

    for(let j = 0; j < traductionInLatin.length; j++){
        messageInLatin = messageInLatin + traductionInLatin[j]
    }

    console.log(messageInLatin)

}
encode()
decode()