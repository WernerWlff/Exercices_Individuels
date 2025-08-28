colorsPossible = ["blue", "red", "yellow", "green"]
colorsToGuess = ["blue", "yellow"]
nbOfTry = 0
isSamecombination = False
userColorsArray = ''


def startTheGame() :
    print(f"Welcome to the game of mastermind, the goal is to find the correct combination of colors, here is the list of all the colors that you can choose : {colorsPossible}.")
    askColor()

def askColor () :
    global nbOfTry
    global userColorsArray
    global colorsPossible

    userColors = input('choose your colors, please keep them separated with a "/" : ')
    userColorsArray = userColors.split('/')
    isColorValid()


def isColorValid() :
    global userColorsArray
    global colorsPossible
    global colorsToGuess

    if len(userColorsArray) != len(colorsToGuess) :
        print(f"You have to enter {len(colorsToGuess)} colors, please try again")
        askColor()
        return

    for color in userColorsArray :
        if color not in colorsPossible :
            print(f"the color {color} is not a choice, please retry")
            askColor()
            return
        
    isCorrect(userColorsArray)

def isCorrect(arrayOfColors) :
    global nbOfTry
    global isSamecombination
    global colorsToGuess

    if arrayOfColors == colorsToGuess :
        isSamecombination = True
        endTheGame()
    else :
        nbOfTry = nbOfTry + 1
        endTheGame()

def placement(arrayOfColorsGiven) :
    global colorsToGuess
    global userColorsArray
    goodPlacement = 0

    #Well placed
    for i in range(min(len(arrayOfColorsGiven), len(colorsToGuess))) :
        if(arrayOfColorsGiven[i] == colorsToGuess[i]) :
            goodPlacement += 1

    #Miss Placed
    colorsToGuessCopy = []
    userColorsCopy = []
    wrongPlacement = 0

    for colorToGuess, colorGiven in zip(colorsToGuess, arrayOfColorsGiven):
        if colorToGuess != colorGiven:
            colorsToGuessCopy.append(colorToGuess)
            userColorsCopy.append(colorGiven)


    for color in userColorsCopy :
        if color in colorsToGuessCopy :
            wrongPlacement += 1
            colorsToGuessCopy.remove(color)

    print(f"{goodPlacement} well placed, {wrongPlacement} wrong placed")
    
def endTheGame() :
    global nbOfTry
    global isSamecombination
    global userColorsArray

    if nbOfTry < 12 and isSamecombination == False : # how many tries left 
        placement(userColorsArray)
        print(f"{12 - nbOfTry} tries left")
        askColor()

    elif nbOfTry < 12 and isSamecombination == True : # We win
        print("Congrats, you won the game of Mastermind")
        return
    
    elif nbOfTry >= 12 and isSamecombination == False : # We loose
        print("you don't have any tries left, you lost the game of mastermind")
        return

startTheGame()