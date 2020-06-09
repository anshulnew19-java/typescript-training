class student{
    
    firstName : string;
    lastName : string;
    age : number;

    constructor(theFirstName : string,theLastName : string,theAge : number){
        this.firstName = theFirstName;
        this.lastName = theLastName;
        this.age = theAge;
    }
}

let theStudent = new student("Ankit","Kumar",30);
console.log(theStudent.firstName + " "+ theStudent.lastName + " " + theStudent.age);