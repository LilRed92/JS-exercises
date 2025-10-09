//Here are the four tasks from Javascript Fundamentals: Objects
// found at https://javascript.info/object#tasks

//Task 1 - Hello, object
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//Task 2 - Check for emptiness
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

//Task 3 - Sum object properties
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum);

//Task 4 - Multiply numeric property values by 2
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}
