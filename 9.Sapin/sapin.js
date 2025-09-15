// function afficherPointeSapin(hauteur){
//     let finalTree = "+"
//     for (let i = 0; i < hauteur; i++){

//     }
// }

let finalTree = ""

function afficherEtoiles(n){
    let totalStars = "*".repeat(n)
    console.log(totalStars)
}

// afficherEtoiles(4)
// afficherEtoiles(1000)

function afficherRectangle(hauteur, largeur){
    for(let i = 0; i < hauteur; i++){
        afficherEtoiles(largeur)
    }
}

// afficherRectangle(5,5)

function afficherTriangleGauche(n){
    for(let i = 0; i < n; i++){
        finalTree += " ".repeat(n - i - 1) + "/" + "*".repeat(i) + "\n"
    }
    console.log(finalTree)
}

// afficherTriangleGauche(5)

function afficherTriangleDroite(n){
    for(let i = 0; i < n; i++){
        finalTree += "*".repeat(i) + "\\" + "\n"
    }
    console.log(finalTree)
}

// afficherTriangleDroite(5)

function afficherPointeSapin(largeur){
    finalTree = " ".repeat(largeur) + "+" + "\n"
    for (let i = 0; i < largeur; i++){
        finalTree += " ".repeat(largeur - i - 1) + "/" + "*".repeat(i) + "|" + "*".repeat(i) + "\\" + "\n"
    }
    console.log(finalTree)
}

afficherPointeSapin(5)