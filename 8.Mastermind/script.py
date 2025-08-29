import random
import customtkinter

colorsPossible = ["blue", "red", "yellow", "green", "pink", "orange", "white", "purple"]
colorsToGuess = []
nbOfTry = 0
isSamecombination = False
userColorsArray = []

graphicDisplay =  customtkinter.CTk()
graphicDisplay.title = 'Mastermind'
graphicDisplay.geometry ('650x500') # 16:9 resolution

graphicText = customtkinter.CTkLabel(graphicDisplay, text = f'Welcome to the game of mastermind, to win the game, you need to find the correct combination of {len(colorsToGuess)} colors. \nHere is the list of all the colors that you can choose : {colorsPossible}.')
graphicText.grid(row=0, column=0, columnspan=4, pady=10)

graphicResults = customtkinter.CTkLabel(graphicDisplay, text=f'{12 - nbOfTry } tries left')
graphicResults.grid(row=1, column=0, columnspan=4, pady = 10)

graphicError = customtkinter.CTkLabel(graphicDisplay, text='')
graphicError.grid(row=2, column=0, columnspan=4, pady=10)


for i in range(4) :
    colorsToGuess.append(random.choice(colorsPossible))

colorSelector = []
for i in range(4) :
    selector = customtkinter.CTkOptionMenu(graphicDisplay, values=colorsPossible)
    selector.grid(row=4, column=i, padx=10, pady=10)
    selector.set("Colors")
    colorSelector.append(selector)

def checkColors():
    global nbOfTry
    global isSamecombination
    global userColorsArray

    graphicError.configure(text='')
    userColorsArray = [selector.get() for selector in colorSelector]
    if userColorsArray == colorsToGuess :
        isSamecombination = True    
    isColorValid()

graphicButton = customtkinter.CTkButton(graphicDisplay, text="Valider", command=checkColors)
graphicButton.grid(row=3, column=2, padx=10, pady=10)

def isColorValid() :
    global userColorsArray
    global colorsPossible
    global colorsToGuess
    global nbOfTry

    if len(userColorsArray) != 4 or "Colors" in userColorsArray :
        graphicError.configure(text='Please select 4 colors before the validate button, try again')
        return
    nbOfTry += 1
    endTheGame()

#supposed to change the label of our text area
def placement(arrayOfColorsGiven):
    global colorsToGuess
    global userColorsArray
    goodPlacement = 0

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

    graphicResults.configure(text=f"{goodPlacement} well placed, {wrongPlacement} correct but not placed correctly")

def endTheGame() :
    global nbOfTry
    global isSamecombination
    global userColorsArray

    if nbOfTry < 12 and isSamecombination == False : # how many tries left 
        placement(userColorsArray)
        graphicResults.configure(text=f"{12 - nbOfTry} tries left")
        return

    elif nbOfTry == 11 and isSamecombination == False : #last try --> change the display to tell the player
        placement(userColorsArray)
        graphicResults.configure(text="Last try, good luck")
        return

    
    elif nbOfTry < 12 and isSamecombination == True : # We win
        graphicResults.configure(text="")
        graphicResults.configure(text="Congrats, you won the game of Mastermind")
        return
    
    elif nbOfTry >= 12 and isSamecombination == False : # We loose
        graphicDisplay.configure(text="")
        graphicResults.configure(text="you don't have any tries left, you lost the game of mastermind")
        return

#------------------------------------------------------------------------------------------------------------------------------------------------
# def startTheGame() :
#     print(f"Welcome to the game of mastermind, to win the game, you need to find the correct combination of {len(colorsToGuess)} colors. \nHere is the list of all the colors that you can choose : {colorsPossible}.")
#     askColor()

# def askColor () :
#     global nbOfTry
#     global userColorsArray
#     global colorsPossible

#     userColors = input('choose your colors, please keep them separated with a "/" : ')
#     userColorsArray = userColors.split('/')
#     isColorValid()


# def isColorValid() :
#     global userColorsArray
#     global colorsPossible
#     global colorsToGuess

#     if len(userColorsArray) != len(colorsToGuess) :
#         print(f"You have to enter {len(colorsToGuess)} colors, please try again")
#         askColor()
#         return

#     for color in userColorsArray :
#         if color not in colorsPossible :
#             print(f"the color {color} is not a choice, please retry")
#             askColor()
#             return
        
#     isCorrect(userColorsArray)

# def isCorrect(arrayOfColors) :
#     global nbOfTry
#     global isSamecombination
#     global colorsToGuess

#     if arrayOfColors == colorsToGuess :
#         isSamecombination = True
#         endTheGame()
#     else :
#         nbOfTry = nbOfTry + 1
#         endTheGame()

# def placement(arrayOfColorsGiven) :
#     global colorsToGuess
#     global userColorsArray
#     goodPlacement = 0

#     #Well placed
#     for i in range(min(len(arrayOfColorsGiven), len(colorsToGuess))) :
#         if(arrayOfColorsGiven[i] == colorsToGuess[i]) :
#             goodPlacement += 1

#     #Miss Placed
#     colorsToGuessCopy = []
#     userColorsCopy = []
#     wrongPlacement = 0

#     for colorToGuess, colorGiven in zip(colorsToGuess, arrayOfColorsGiven):
#         if colorToGuess != colorGiven:
#             colorsToGuessCopy.append(colorToGuess)
#             userColorsCopy.append(colorGiven)


#     for color in userColorsCopy :
#         if color in colorsToGuessCopy :
#             wrongPlacement += 1
#             colorsToGuessCopy.remove(color)

#     print(f"{goodPlacement} well placed, {wrongPlacement} wrong placed")
    
# def endTheGame() :
#     global nbOfTry
#     global isSamecombination
#     global userColorsArray

#     if nbOfTry < 12 and isSamecombination == False : # how many tries left 
#         placement(userColorsArray)
#         print(f"{12 - nbOfTry} tries left")
#         askColor()

#     elif nbOfTry < 12 and isSamecombination == True : # We win
#         print("Congrats, you won the game of Mastermind")
#         return
    
#     elif nbOfTry >= 12 and isSamecombination == False : # We loose
#         print("you don't have any tries left, you lost the game of mastermind")
#         return

# startTheGame()
graphicDisplay.mainloop()