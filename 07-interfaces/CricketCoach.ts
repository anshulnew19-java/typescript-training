import { Coach } from "./Coach";

export class CricketCoach implements Coach{

    getDailyWorkout(): string {
        return "Practices your spin bowling 7-8 hrs.";
    }
    
}