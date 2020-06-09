let found : boolean = true;
let grade : number = 88.9;
let firstName : string = "Anup";
let lastName : string = "Kumar";
let myData : any = "Data 30.99 true";

console.log(found);
console.log("Grade is : " + grade);
console.log("Hi " + " " + firstName + " " + lastName);
console.log("Any Data : " + myData);

// Use template Strings
console.log(`Hi ${firstName} ${lastName}`);

// This becomes type-mismatch

/*
    found = 0;
    firstName = 99.0;
    grade = "Hello";
*/