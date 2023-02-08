const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field = [[]]) {
        this.field = field;
        this.locationX = 0;
        this.locationY = 0;
        // Home position
        this.field[0][0] = pathCharacter;
    }
    // Run game method
    runGame() {
        let gameOn = true;

        while(gameOn) {
            this.print();
            this.move();

            if(!this.isOutside()) {
                console.log('You have step out of the field! Game over!');
                gameOn = false;
                break;
            } else if(this.isHole()) {
                console.log('What a pity! You fell into the hole!');
                gameOn = false;
                break;
            } else if(this.isHat()) {
                console.log('Congrats mate! You made it!');
                gameOn = false;
                break;
            }
            // Update current location on the field
            this.field[this.locationY][this.locationX] = pathCharacter;

        } 
    }
    // Move method
    move() {
        let move = prompt('Where do you want to move? u = up, d = down, l = left, r = right \n');

        switch(move) {
            case 'u':
                this.locationY -= 1;
                break;
            case 'd':
                this.locationY += 1;
                break;
            case 'l':
                this.locationX -= 1;
                break;
            case 'r':
                this.locationX += 1;
                break;
            default:
                console.log('Wrong button! Did you click U, D, L or R?');
                break;
        }
    }

    // Rules
    isHat() {
        return this.field[this.locationY][this.locationX] === hat;
    }

    isHole() {
        return this.field[this.locationY][this.locationX] === hole;
    }

    isOutside() {
        return (
            this.locationX >= 0 && this.locationY >= 0 && this.locationY <= this.field.length && this.locationX <= this.field[0].length
        );
    }
    // Print method
    print() {
        const displayString = this.field.map((row) => {
            return row.join('');
        }).join('\n');
        console.log(displayString);
    }

    // Generate field
    static generateField(height, width, percentage = 0.25) {
        const field = new Array(height).fill(0).map(el => new Array(width));

        // Percentage of holes in field
        for (let y = 0; y < height; y ++) {
            for (let x = 0; x < width; x++) {
                const prob = Math.random();
                field[x][y] = prob > percentage ? fieldCharacter : hole;
            }
        }

        // Set the hat location
        const hatLocation = {
            x: Math.floor(Math.random() * width),
            y: Math.floor(Math.random() * height),
        };
        
        // Make sure the "hat is not at the starting point
        while (hatLocation.x === 0 && hatLocation.y === 0) {
        hatLocation.x = Math.floor(Math.random() * width);
        hatLocation.y = Math.floor(Math.random() * height);
        }
        field[hatLocation.y][hatLocation.x] = hat;
        return field;
    }
}

const myfield = new Field(Field.generateField(20, 20, 0.3));
myfield.runGame();