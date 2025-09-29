function subtract_operation(num1, num2) { //function declaration
    return num1 - num2;
};

const divide_operation = (num1, num2) => { //arrow function
    return num1 / num2;
};


const test_num1 = 26; //variable declaration and assignment
let test_num2 = 10;
const test_total = test_num1 + test_num2;
console.log(`The variable type is ${typeof test_total} and the value is ${test_total}`);

if (test_total != 34) { //if statement

    console.log(`Total doesn't equal 34`)
};

switch (test_total) { //switch statement
    case 34:
        console.log(`It's exactly 34!`);
        break;
    case 2:
        console.log(`It's exactly 2!`);
        break;
};

const subtraction_result = subtract_operation(test_num1, test_num2);
console.log(`The subtraction result is ${subtraction_result}`);

for(let counter=5; counter<=10; counter++) { //for loop
    console.log(`The counter is now ${counter}`);
};

const name_array = ['Alice', 'Bob', 'Charlie']; //array

for(let i=0; i<name_array.length; i++) { //for loop through array
    console.log(`${name_array[i]} is a good name!`);
};

let house = { //object
    'bedrooms': 4,
    bathrooms: 3,
    wall_pain: 'blue'
};

house.price = 250000; //adding property to object
console.log(`The house costs $${house.price}`);
console.log(`The house has ${house['bedrooms']} bedrooms`);

class Car { //class
    constructor(brand, model, year) {
        this._brand = brand;
        this._model = model;
        this._year = year;
    }
    get carInfo() {
        return `${this._year} ${this._brand} ${this._model}`;
    }
};

const ferrari = new Car('Ferrari', '488 Spider', 2020); //instantiation of class
console.log(`My car is a ${ferrari.carInfo}`);