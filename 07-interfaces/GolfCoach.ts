import { Coach } from "./Coach";

export class GolfCoach implements Coach{

    getDailyWorkout(): string {
        return "Throw 1000 balls within golf range.";
    }
    
}