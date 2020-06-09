var reviews = [3, 4, 5, 6.6, 10];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var average = total / reviews.length;
console.log("Total Sum is : " + total + "\n");
console.log("Average is : " + average);
