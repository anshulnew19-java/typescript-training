var student = /** @class */ (function () {
    function student(theFirstName, theLastName, theAge) {
        this.firstName = theFirstName;
        this.lastName = theLastName;
        this.age = theAge;
    }
    return student;
}());
var theStudent = new student("Ankit", "Kumar", 30);
console.log(theStudent.firstName + " " + theStudent.lastName + " " + theStudent.age);
