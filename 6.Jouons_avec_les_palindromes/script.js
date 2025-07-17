function isValidDate(date) {
  let arrayOfString = date.split("/"); // sépare notre date en tableau de string

  let dd = arrayOfString[0];
  let mm = arrayOfString[1];
  let yyyy = arrayOfString[2];
  let dateWithoutTab = String(dd + mm + yyyy)

  if (yyyy >= 1000 && yyyy <= 9999 && maxDaysInMonth(dd, mm) === true) {
    if(isPalindrome(dateWithoutTab)=== true){
      return true
    }

    else{
      return false
    }
  }

  else{
    return false
  }
}

function maxDaysInMonth(dayInMonth, month) {
  // on définit nos mois pour savoir combien de jours on a dans notre mois
  const MONTH31 = ["01", "03", "05", "07", "08", "10", "12"];
  const MONTH30 = ["04", "06", "09", "11"];
  const FEVRIER = ["02"];
  
  // c'est des conditions à part
  if (month >= "01" && month <= "12") {
    if (dayInMonth >= "01" && dayInMonth <= "28") {
      if (FEVRIER.includes(month)) {
        return true;
      }
    }

    // c'est des conditions à part
    if (dayInMonth >= "01" && dayInMonth <= "31") {
      if (MONTH31.includes(month)) {
        // on vérifie que c'est bien un mois de 31 jours
        return true;
      }
    }

    // c'est des conditions à part
    if (dayInMonth >= "01" && dayInMonth <= "30") {
      if (MONTH30.includes(month)) {
        // on vérifie que c'est bien un mois de 30 jours
        return true;
      }
    }
    return false;
  }
  
  else {
    return false;
  }
}

function isPalindrome(string) {
  let reverseString = "";

  for (i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
  }

  if (string === reverseString) {
    return true;
  }

  else {
    return false;
  }
}

function isDatePalindrome(day, month, year) {
  let datePalindrome = day + "/" + month + "/" + year;

    if(isValidDate(datePalindrome) === true){
      return true
    }
}

function getNextPalindrome(numOfPalToFind) {

  //créer un élement date
  const dateToCompare = new Date();

  let currentDay = String(dateToCompare.getDate());
  let currentMonth = String(dateToCompare.getMonth() + 1);
  let currentYear = String(dateToCompare.getFullYear());

  let palindromeFound = 0; // on va l'incrémenter quand on trouvera un palindrome --> permet de savoir combien de palindrome on a trouvés

  console.log(`Voici les ${numOfPalToFind} prochaines palindromes à venir à partir d'aujourd'hui :`);

  while (palindromeFound < numOfPalToFind) {
    if (currentDay.length === 1) {
      currentDay = String(currentDay.padStart(2, 0));
    }

    if (currentMonth.length === 1) {
      currentMonth = String(currentMonth.padStart(2, 0));
    }

    if (isDatePalindrome(currentDay, currentMonth, currentYear) === true) {
      console.log("la date " + currentDay + "/" + currentMonth + "/" + currentYear + " est un palindrome");
      palindromeFound++;
    }

    dateToCompare.setDate(dateToCompare.getDate() + 1);

    currentDay = String(dateToCompare.getDate());
    currentMonth = String(dateToCompare.getMonth() + 1);
    currentYear = String(dateToCompare.getFullYear());
  }
}

getNextPalindrome(8);
console.log(isPalindrome("kayak"))