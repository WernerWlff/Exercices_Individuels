let varTamp = 0                                                         // will assure that the user selected a number between 1 and 50
const ANSWER = parseInt(chooseTheAnswer(varTamp))                       // stock the answer to the game
let numberOfTry = 0                                                     // stock the number of try

const nbEssai = document.querySelector("#nbOfTry")                      // get the text in the element 'nbOfTry' cf.14
const minus = document.querySelector('#minus')                          // get the text in the element 'minus' cf.18
const maximum = document.querySelector('#maximum')                      // get the text in the element 'maximum' cf.26
const appelFonction = document.querySelector("#appelFonction")          // get the text in the element 'appelFonction' cf.29
const Corps = document.querySelector("body")                            // get all the text of the html page

appelFonction.addEventListener("click", gameplay)                       // trigger the function gampelay() when the user click on the button

function chooseTheAnswer(limit){                                        // Will ask the user for the value of ANSWER
    limit = prompt("Choisissez un nombre entre 1 et 50")
    while(limit < 0 || limit > 50){
        limit = prompt ("j'ai demandé un nombre entre 1 et 50 €_€, réessaye")
    }
    return limit
}

function didIWin(number, numberToGuess){                                // Will show different answer depending of the input from the guesser
    if(number == numberToGuess){                                        // When the guesser find the good number
        Corps.innerHTML = "<h1> Bravo ! Vous avez deviné le nombre 🥳 </h1>" +
                          "<img src= https://media1.tenor.com/m/CarV7GDhiwQAAAAd/yippee-cat.gif />"
        
    } else if (number < numberToGuess){                                 // When the guesser choose a number lower than the answer
        if (number > parseInt(minus.innerText)){                        // we use parseInt to be assured that we compare 2 numbers and not a string and a number
            minus.innerText = number
            numberOfTry = numberOfTry + 1
        }
        else {                                                          // In case the guesser goes even lower than the range we gave him  
            alert("le nombre proposé n'est pas dans la range")
        }

    } else if (number > numberToGuess){                                 // When the guesser choose a number higher than the answer
        if (number < parseInt(maximum.innerText)){                      // we use parseInt to be assured that we compare 2 numbers and not a string and a number
            maximum.innerText = number
            numberOfTry = numberOfTry + 1
        }
        else {
            alert("le nombre proposé n'est pas dans la range")          // In case the guesser goes even higher than the range we gave him
        }
    }
}

function gameplay(){

    const appelInput = parseInt(document.querySelector("#test").value)  //we use parseInt because we want to compare 2 numbers and not 2 strings
    didIWin(appelInput,ANSWER)                                          // we call our function to to the test
    nbEssai.innerHTML = `Vous avez réalisé ${numberOfTry} essais`       // we display the number of tries the guesser made
}
