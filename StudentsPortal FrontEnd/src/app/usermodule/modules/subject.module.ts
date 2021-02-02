import { AnimationKeyframesSequenceMetadata } from "@angular/animations";
import { Courses } from "./course.module";
import { Faculty } from "./faculty.module";

export class Subjects{
   
    public subjectId:number;
    public subjectName:string;
    public courseId:Courses;
    public facultyId:Faculty;
}