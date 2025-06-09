let score = 33

console.log(typeof score);    // these are just 2 ways to check the type of datatype.
console.log(typeof (score));


let marks = "99"
console.log("Type of marks is " + typeof marks);


let marksValueInNumber = Number(marks)
console.log("Type of marksValueInNumber is " + typeof marksValueInNumber);


let grade = "11xyz"
console.log("Type of grade is " + typeof grade);

let gradeValueInNumber = Number(grade)
console.log("The Type of gradeValueInNumber is " + typeof gradeValueInNumber);
console.log(gradeValueInNumber);


let points = null 
console.log("The type of points is " + typeof points);
  
let pointsValueInNumber = Number(points)
console.log("The Type of pointsValueInNumber is " + typeof pointsValueInNumber);
console.log(pointsValueInNumber);



let tally = undefined
console.log("The type of tally is " + typeof tally)

let tallyValueInNumber = Number(tally)
console.log("The Type of tallyValueInNumber is " + typeof tallyValueInNumber);
console.log(tallyValueInNumber);



let count = true 
console.log("The type of count is " + typeof true)

let countValueInNumber = Number(true)
console.log("The Type of countValueInNumber is " + typeof countValueInNumber);
console.log(countValueInNumber);






// "99" => 99  it converts to number
// "11xyz" => NaN which means not a number but its type is still a number.
// null => 0  
// undefined => NaN 
// true => 1   ,  false => 0
// 1 => true  , 0 => false 
// "" => false 
// "Adarsh" => true

