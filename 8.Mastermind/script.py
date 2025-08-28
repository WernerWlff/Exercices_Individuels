colors = ["blue", "red", "yellow", "green"]
colorsToGuess = ["blue", "yellow"]
nbOfTry = 0
isSamecombination = False
userColorsArray = ''

def askColor () :
    global nbOfTry
    global userColorsArray

    userColors = input('choose your colors, please keep them separated with a "/" : ')
    userColorsArray = userColors.split('/')
    if nbOfTry <= 12 :
        isCorrect(userColorsArray)


def isCorrect(arrayOfColors) :
    global nbOfTry
    global isSamecombination

    if arrayOfColors == colorsToGuess :
        isSamecombination = True
        endTheGame()
    else  :
        nbOfTry = nbOfTry + 1
        endTheGame()

def placement(arrayOfColorsGiven) :
    global colorsToGuess
    global userColorsArray
    goodPlacement = 0

    #Well placed
    for i in range(len(arrayOfColorsGiven)) :
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
        print(f"wrong, {12 - nbOfTry} tries left")
        placement(userColorsArray)
        askColor()

    elif nbOfTry < 12 and isSamecombination == True : # We win
        print("Congrats, you won the game of Mastermind")
        return
    
    elif nbOfTry >= 12 and isSamecombination == False : # We loose
        print("you don't have any tries left, you lost the game of mastermind")
        return

askColor()