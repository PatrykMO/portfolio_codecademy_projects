// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// The purpose of validateCred() is to return true when an array contains digits of a valid credit card number and false when it is invalid. This function should NOT mutate the values of the original array.
const validateCred = (array) => {
    const startingPoint = array.length - 1;
    let result = 0;

    // Starting from the farthest digit to the right, AKA the check digit, iterate to the left. As you iterate to the left, every other digit is doubled.
    for (let i = startingPoint - 1; i >= 0; i--) {
        let number = array[i] * 2;
        // If the number is greater than 9 after doubling, subtract 9 from its value.
        if (number > 9) {
            result = result + (number - 9);
        } else {
            result = result + number;
        }
        // One step more to target every second digit.
        i--;
    };

    for (let i = startingPoint; i >=0; i--) {
        result = result + array[i];
        // One step more to target every second digit.
        i--;
    };

    // If the sum modulo 10 is 0 then the number is valid, otherwise, it’s invalid.
    if (result %10 === 0) {
        return true;
    } else {
        return false;
    };
};

// The role of findInvalidCards() is to check through the nested array for which numbers are invalid, and return another nested array of invalid cards.
const findInvalidCards = (nestedArray) => {
    let invalidCardsArray = [];

    for(let i = 0; i < nestedArray.length; i++) {
        // Looking for invalid cards number in array
       if(!validateCred(nestedArray[i])) {
         invalidCardsArray.push(nestedArray[i]);
        }
    };
    return invalidCardsArray;
};

// idInvalidCardCompanies() should return an array of companies that have mailed out cards with invalid numbers. This array should NOT contain duplicates, i.e. even if there are two invalid Visa cards, "Visa" should only appear once in the array.
const idInvalidCardCompanies = (nestedInvalidCardsArray) => {
    let companies = [];

    // Iteration through array
    for (let i = 0; i < nestedInvalidCardsArray.length; i++) {
       // Checking first digit from card number to find out producer
       let firstDigit = nestedInvalidCardsArray[i][0];
       // Checking if Amex
       if (firstDigit === 3) {
        if (!companies.includes('American Express')){
            companies.push('American Express');
        }
       }
       // Checking if Visa
       else if (firstDigit === 4) {
        if (!companies.includes('Visa')){
            companies.push('Visa');
        }
       }
       // Checking if Mastercard
       else if (firstDigit === 5) {
        if (!companies.includes('Mastercard')){
            companies.push('Mastercard');
        }
       }
        // Checking if Discover
        else if (firstDigit === 6) {
            if (!companies.includes('Discover')){
                companies.push('Discover');
            }
        } else {
            console.log('Company not found')
        }
    };
    return companies;
};
