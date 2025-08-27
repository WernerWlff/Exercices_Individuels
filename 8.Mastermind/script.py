colors = ["blue", "red", "yellow", "green"]
colorsToGuess = ["blue", "yellow"]
nbOfTry = 0
isSamecombination = False

def askColor () :
    global nbOfTry
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

def endTheGame() :
    global nbOfTry
    global isSamecombination
    if nbOfTry < 12 and isSamecombination == False : # how many tries left 
        print(f"wrong, {12 - nbOfTry} tries left")
        askColor()

    elif nbOfTry < 12 and isSamecombination == True : # We win
        print("Congrats, you won the game of Mastermind")
        return
    
    elif nbOfTry >= 12 and isSamecombination == False : # We loose
        print("you don't have any tries left, you lost the game of mastermind")
        return

askColor()