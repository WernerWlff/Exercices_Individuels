import { latinToMorse } from "./dictionnaire.js"
import { morseToLatin } from "./dictionnaire.js"

//-------------------------------------------------------------------DOM---------------------------------------------------------------------//
const LATINSIDE = document.querySelector('#latinSide')
const MORSESIDE = document.querySelector('#morseSide')

const LATINTEXT = document.getElementById('latinText') // notre textarea du latin
const MORSETEXT = document.getElementById('morseText') // notre textarea du morse

const TOLATIN = document.getElementById('toLatin') // bouton pour transformer en morse
const TOMORSE = document.getElementById('toMorse') // bouton pour transformer en latin

//------------------------------------------------------------addEventListener--------------------------------------------------------------//

TOMORSE.addEventListener("click", encode)
TOLATIN.addEventListener("click", decode)

//------------------------------------------------------------Latin --> Morse----------------------------------------------------------------//

function getLatinCharacterList(messageToChange){
    let stringToArray = messageToChange.split('')
    return stringToArray // tableau de notre message
}

function translateLatinCharacter(letter){
    return latinToMorse[letter.toUpperCase()]

}

function encode(){
    let message = LATINTEXT.value
    let traductionInMorse = getLatinCharacterList(message)
    let messageInMorse = ""

    //on transforme nos lettres
    for(let i = 0; i < traductionInMorse.length; i++){
        traductionInMorse[i] = translateLatinCharacter(traductionInMorse[i])
    }

    //on écrit dans la variable message a la place
    for(let i = 0; i < traductionInMorse.length; i++){
        messageInMorse = messageInMorse + " " + traductionInMorse[i]
    }

    MORSETEXT.innerText = messageInMorse

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
    let morseMessage = MORSETEXT.value
    let traductionInLatin = getMorseCharacterList(morseMessage)
    traductionInLatin = traductionInLatin.splice(1) // permet de retirer le premier élément de notre tableau qui est vide
    
    let messageInLatin = "" // variable tampon qui va permettre de garder notre phrase traduite
    
    console.log(traductionInLatin)

    
    //on va transformer notre code en morse en lettres
    for(let i = 0; i < traductionInLatin.length; i++){
        
        traductionInLatin[i] = translateMorseCharacter(traductionInLatin[i])
    }

    for(let j = 0; j < traductionInLatin.length; j++){
        messageInLatin = messageInLatin + traductionInLatin[j]
        console.log(messageInLatin)
    }

    LATINTEXT.innerText = messageInLatin
}