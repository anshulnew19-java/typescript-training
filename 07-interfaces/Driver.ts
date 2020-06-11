import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";
import { Coach } from "./Coach";

let myCrickrtCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

let theCoaches: Coach[] = [];

theCoaches.push(myCrickrtCoach);
theCoaches.push(myGolfCoach);

for(let tempCoaches of theCoaches){
    console.log(tempCoaches.getDailyWorkout());
}
