function isValidDate(date){
    let arrayOfString = date.split('/') // sépare notre date en tableau de string

    let dd = arrayOfString[0]
    let mm = arrayOfString[1]
    let yyyy = arrayOfString[2]


    if (yyyy >= 1000 && yyyy <= 9999 && maxDaysInMonth(dd,mm) === true){
        console.log("La date entrée est valide, on va pouvoir vérifier si c'est un palindrome")
        isPalindrome(dd,mm,yyyy) // à développer
    }

    else {
        console.log("La date n'est pas valide car l'année n'est pas prise en charge")
    }

}

function maxDaysInMonth(dayInMonth, month){

    // on définit nos mois pour savoir combien de jours on a dans notre mois
    const MONTH31 = ["01", "03", "05", "07", "08", "10", "12"]
    const MONTH30 = ["04", "06", "09", "11"]
    const FEVRIER = ["02"]

    if(month >= "01" && month <= "12"){
        // c'est des conditions à part
        if(dayInMonth >= "01" && dayInMonth <= "28"){
                if(FEVRIER.includes(month)){
                    return true
                }
        }

        // c'est des conditions à part
        if(dayInMonth >= "01" && dayInMonth <= "31"){
            if(MONTH31.includes(month)){ // on vérifie que c'est bien un mois de 31 jours
                return true
            }
        }

        // c'est des conditions à part
        if(dayInMonth >= "01" && dayInMonth <= "30"){
                if(MONTH30.includes(month)){ // on vérifie que c'est bien un mois de 30 jours
                    return true
                }
        }

        console.log("la date n'est pas valide car le jour n'est pas bon")
        return false
    }

    else{
        console.log("la date n'est pas valide car le mois n'est pas bon")
        return false
    }

}

function isPalindrome(day, month, year){

    let reverseDate = ""
    let datePalindrome = day + month + year

    let arrayDate = datePalindrome.split('')

    for(i = arrayDate.length - 1; i >= 0 ; i--){
        reverseDate += arrayDate[i]
    }

    if (datePalindrome === reverseDate){
        console.log("la date " + day + "/" + month + "/" + year + " est bien un palindrome")
    }
    else {
        console.log("La date donnée n'est pas un palindrome")
    }

}
// TEST TECHNIQUES
isValidDate("31/01/2001") // Vraie --> Pas palindrome
isValidDate("11/02/2011") // Vraie --> Palindrome
// isValidDate("30/11/2001") // Vraie --> Pas palindrome
// isValidDate("28/02/2001") // Vraie --> Pas palindrome
// isValidDate("31/02/2001") // Faux --> date impossible ( jour )
// isValidDate("45/07/2001") // Faux --> date impossible ( jour )
// isValidDate("31/11/2001") // Faux --> date impossible ( jour )
// isValidDate("01/01/01") // faux --> date impossible ( année )
// isValidDate("01/14/100000") // faux --> date impossible ( année )
// isValidDate("15/14/2001") // faux --> date impossible ( mois )