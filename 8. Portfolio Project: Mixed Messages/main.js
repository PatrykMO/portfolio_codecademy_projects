// Import
const prompt = require('prompt-sync')();

// Random number generator
const randomNumbFunc = () => {
    return Math.floor(Math.random() * 21);
};

// Data
const horoskop = {
    sign: ['Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'],
    divination: ['“Wherever you go, go with all your heart.”', '“You have a charming way with words and should write a book.” (You might guess that this is my favorite!)', '“From small beginnings come great things.”', '“An amazing adventure awaits you.”', '“Always have old memories and young hopes.”', '“When the flowers bloom, so will great joy in your heart.”', '“To shine is better than to reflect.”', '“Confucious say: He who has hope, has everything.”', '“You must know your own heart before you can know the heart of another.”', '“You are protected by silent love and friendship near you.”' , '“The world will soon be ready to receive your talents.”', '“Now is the time to try something new. You will benefit.”', '“Your hard work is about to pay off.”', '“Good fortune takes preparation.”', '“The star of riches is shining on you.”', ' “You will soon bring joy to someone.”', '“You will spend many years in comfort and material wealth.”', '“Next summer you will dance to a different beat.”', '“If you can befriend yourself, youll never be lonely.”', '“You will attract cultured and artistic people to your home.”', '“Your investments of time now will lead to success later.”'],
    celeb: [['Ashton Kutcher, February 7th, Michael Jordan, February 17th, Christian Bale, January 30th, Bob Marley, February 6th'], ['Justin Bieber, March 1st, Daniel Craig, March 2nd, Eva Mendes, March 5th'], ['Elton John, March 25th, Robert Downey Jr., April 4th, Hugh Heffner, April 9th, Joan Crawford, March 23rd'], ['Tina Fey, May 18th, Billy Joel, May 9th, Adele, May 5th, Dwayne Johnson, May 2nd'], ['Angelina Jolie, June 4th, Marylyn Monroe, June 1st, Naomi Campbell, May 22nd, Morgan Freeman, June 1st'], ['Selena Gomez, July 22, Lele Pons, June 25th, Lionel Messi, June 24th, Tom Hanks, July 9th'], ['Jennifer Lopez, July 24th, Sandra Bullock, July 26th, Barack Obama, August 4th'], ['Tim Burton, August 25th, Paul Walker, September 12th, Warren Buffett, August 30th'], ['Kate Winslet, October 5th, Kim Kardashian, October 21st, Emienim, October 17th'], ['Anne Hathaway, November 12th, Ryan Gosling, November 12th, Julia Roberts, October 28th'], ['Taylor Swift, December 13th, Brad Pitt, December 18th, Nicki Manaj, December 8th'], ['Jim Carrey, January 17th, Tiger Woods, December 30th, Mel Gibson, January 3rd']]
};

// Random divination
const todaysDivination = horoskop.divination[randomNumbFunc()];

// User input
const zodiacSign = prompt('What is your zodiac sign? Write it in Latin. Example: Aquarius, Aries ..');

// Cases
switch (zodiacSign) {
    case 'Aquarius':
        console.log(`Your divination for today is ${todaysDivination}`);
        console.log(`Famous celebs with ${zodiacSign} sign are ${horoskop.celeb[0]}`);
        console.log('Good Luck!');
        break;
    case 'Pisces':
        console.log(`Your divination for today is ${todaysDivination}`);
        console.log(`Famous celebs with ${zodiacSign} sign are ${horoskop.celeb[1]}`);
        console.log('Good Luck!');
        break;
    case 'Aries':
        console.log(`Your divination for today is ${todaysDivination}`);
        console.log(`Famous celebs with ${zodiacSign} sign are ${horoskop.celeb[1]}`);
        console.log('Good Luck!');
        break;
    case 'Taurus':
        console.log(`Your divination for today is ${todaysDivination}`);
        console.log(`Famous celebs with ${zodiacSign} sign are ${horoskop.celeb[1]}`);
        console.log('Good Luck!');
        break;
    case 'Gemini':
        console.log(`Your divination for today is ${todaysDivination}`);
        console.log(`Famous celebs with ${zodiacSign} sign are ${horoskop.celeb[2]}`);
        console.log('Good Luck!');
        break;
    case 'Cancer':
        console.log(`Your divination for today is ${todaysDivination}`);
        console.log(`Famous celebs with ${zodiacSign} sign are ${horoskop.celeb[2]}`);
        console.log('Good Luck!');
        break;
    case 'Leo':
        console.log(`Your divination for today is ${todaysDivination}`);
        console.log(`Famous celebs with ${zodiacSign} sign are ${horoskop.celeb[2]}`);
        console.log('Good Luck!');
        break;
    case 'Virgo':
        console.log(`Your divination for today is ${todaysDivination}`);
        console.log(`Famous celebs with ${zodiacSign} sign are ${horoskop.celeb[2]}`);
        console.log('Good Luck!');
        break;
    case 'Libra':
        console.log(`Your divination for today is ${todaysDivination}`);
        console.log(`Famous celebs with ${zodiacSign} sign are ${horoskop.celeb[2]}`);
        console.log('Good Luck!');
        break;
    case 'Scorpio':
        console.log(`Your divination for today is ${todaysDivination}`);
        console.log(`Famous celebs with ${zodiacSign} sign are ${horoskop.celeb[2]}`);
        console.log('Good Luck!');
        break;
    case 'Sagittarius':
        console.log(`Your divination for today is ${todaysDivination}`);
        console.log(`Famous celebs with ${zodiacSign} sign are ${horoskop.celeb[2]}`);
        console.log('Good Luck!');
        break;
    case 'Capricorn':
        console.log(`Your divination for today is ${todaysDivination}`);
        console.log(`Famous celebs with ${zodiacSign} sign are ${horoskop.celeb[2]}`);
        console.log('Good Luck!');
        break;
    default :
    console.log('There was an error. Try again! Remember to use latin signs and first capital letter')
};

s