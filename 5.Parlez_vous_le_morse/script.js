import { latinToMorse } from "./dictionnaire.js"
import { morseToLatin } from "./dictionnaire.js"

function getLatinCharacterList(messageToChange){
    let stringToArray = messageToChange.split('')
    return stringToArray // tableau de notre message
}

function translateLatinCharacter(letter){
    return latinToMorse[letter.toUpperCase()]

}

function encode(){
    let message = prompt('Saissisez le message que vous voulez traduire en morse ?')
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

encode()