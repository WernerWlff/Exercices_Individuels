let finalTree = ""

function afficherPointeSapin(largeur){
    finalTree = " ".repeat(largeur) + "+" + "\n"
    for (let i = 0; i < largeur; i++){
        finalTree += " ".repeat(largeur - i - 1) + "/" + "*".repeat(i) + "|" + "*".repeat(i) + "\\" + "\n"
    }
    console.log(finalTree)
}

afficherPointeSapin(5)