import { Subject } from "rxjs";
import { Courses } from "./course.module";


export class Dailyschedule
{
    public dailyId:number;
    public  startDateTime: any;
    public endDateTime: any;
    public dailySchLink: string;
    public coursenamesub:Courses; 
    public subject:string;
}