let sports : string[] = ["Golf","Cricket","Hockey","Swimming","Running"];

// Let's traditional for Loop

console.log("Traditional For Loop : \n");

for (let i = 0; i < sports.length; i++) {
    console.log(sports[i]);
    
}

// Let's simplified for Loop

console.log("Simplified For Loop : \n");

for(let tempSport of sports){
    if (tempSport == "Cricket") {
        console.log(tempSport + "  is my favorite game.");
    } else {
        console.log(tempSport);   
    }
}
