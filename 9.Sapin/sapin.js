let finalTree = ""

function afficherEtage(hauteur, pointe_offset, espacement){
    if(finalTree === ""){
        finalTree += " ".repeat(espacement) + " ".repeat(pointe_offset) + " ".repeat(hauteur) + '+' + '\n'
    }
    for(let i = 0; i < hauteur; i++){
        finalTree += " ".repeat(espacement) +  " ".repeat(hauteur - i - 1) + "/" + "*".repeat(i + pointe_offset) + "|" + "*".repeat(i + pointe_offset) + "\\" + "\n"
    }

return finalTree
}

function afficherRectangle(hauteur, largeur){
    for(let i = 0; i < hauteur; i++){
    }
}

function afficherSapin(etages, hauteur_etage){
    let j = 0;
    for(let i = etages; i > 0; i--){
        afficherEtage(hauteur_etage, j, i);
        j++
    }
    for(let i = 0; i < 3; i++){
        finalTree += " ".repeat(j) + " ".repeat(hauteur_etage - 1)  + "###" + "\n"
    }
    console.log(finalTree)
}


afficherSapin(3,3)
