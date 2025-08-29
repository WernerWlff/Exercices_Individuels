import random
import customtkinter

colorsPossible = ["blue", "red", "yellow", "green", "pink", "orange", "white", "purple"]
colorsToGuess = []
nbOfTry = 0
isSamecombination = False
userColorsArray = []

for i in range(4):
    colorsToGuess.append(random.choice(colorsPossible))


graphicDisplay = customtkinter.CTk()
graphicDisplay.title("Mastermind")
graphicDisplay.geometry("650x600")

graphicText = customtkinter.CTkLabel(
    graphicDisplay,
    text=f"Welcome to the game of Mastermind!\nFind the correct combination of 4 colors.\nAvailable colors: {colorsPossible}",
    font=("Arial", 14, "bold"),
    justify="center"
)
graphicText.grid(row=0, column=0, columnspan=4, pady=20, padx=20)

graphicResults = customtkinter.CTkLabel(
    graphicDisplay,
    text=f"{12 - nbOfTry} tries left",
    font=("Arial", 12)
)
graphicResults.grid(row=1, column=0, columnspan=4, pady=10)

graphicError = customtkinter.CTkLabel(
    graphicDisplay,
    text="",
    font=("Arial", 12, "italic"),
    text_color="red"
)
graphicError.grid(row=2, column=0, columnspan=4, pady=10)

graphicPlacement = customtkinter.CTkLabel(
    graphicDisplay,
    text="",
    font=("Arial", 12),
)
graphicPlacement.grid(row=3, column=0, columnspan=4, pady=10)

colorSelector = []
for i in range(4):
    selector = customtkinter.CTkOptionMenu(
        graphicDisplay,
        values=colorsPossible,
        width=120,
        height=30,
        font=("Arial", 12)
    )
    selector.set("Colors")
    selector.grid(row=4, column=i, padx=15, pady=20)
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

# Bouton Valider
graphicButton = customtkinter.CTkButton(
    graphicDisplay,
    text="Valider",
    command=checkColors,
    width=120,
    height=35,
    font=("Arial", 12, "bold")
)
graphicButton.grid(row=5, column=0, columnspan=4, pady=15)


def isColorValid() :
    global userColorsArray
    global colorsPossible
    global colorsToGuess
    global nbOfTry

    if len(userColorsArray) != 4 or "Colors" in userColorsArray :
        graphicError.configure(text='Please select 4 colors before pressing the validate button, try again')
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

    graphicPlacement.configure(text=f"{goodPlacement} well placed, {wrongPlacement} correct but not placed correctly")

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
        graphicPlacement.configure(text="")
        graphicResults.configure(text="Congrats, you won the game of Mastermind", font=("Arial",18))
        graphicButton.grid_forget()
        return
    
    elif nbOfTry >= 12 and isSamecombination == False : # We loose
        graphicDisplay.configure(text="")
        graphicPlacement.configure(text="")
        graphicResults.configure(text="you don't have any tries left, you lost the game of mastermind", font=("Arial",18))
        graphicButton.grid_forget()
        return

graphicDisplay.mainloop()