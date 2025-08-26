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
    while nbOfTry < 12 and isSamecombination == False :
        print(f"wrong, {12 - nbOfTry} tries left")
        askColor()
    if nbOfTry == 12 :
        print("you don't have any tries left, you lost the game of mastermind")
    else:
        print("Congrats, you won the game of mastermind")
        return



askColor()