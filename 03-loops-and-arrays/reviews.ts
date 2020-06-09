let reviews : number[] = [3,4,5,6.6,10];

let total : number = 0;

for (let i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}

let average : number = total/reviews.length;
console.log("Total Sum is : " + total + "\n");
console.log("Average is : " + average);