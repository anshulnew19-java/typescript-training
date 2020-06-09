var sports = ["Golf", "Cricket", "Hockey", "Swimming", "Running"];
// Let's traditional for Loop
console.log("Traditional For Loop : \n");
for (var i = 0; i < sports.length; i++) {
    console.log(sports[i]);
}
// Let's simplified for Loop
console.log("Simplified For Loop : \n");
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var tempSport = sports_1[_i];
    if (tempSport == "Cricket") {
        console.log(tempSport + "  is my favorite game.");
    }
    else {
        console.log(tempSport);
    }
}
