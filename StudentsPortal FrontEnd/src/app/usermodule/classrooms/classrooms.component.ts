import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Classroom } from '../modules/classroom.module';
import { Courses } from '../modules/course.module';
import { ClassroomService } from '../services/classroom.service';

@Component({
  selector: 'app-classrooms',
  templateUrl: './classrooms.component.html',
  styleUrls: ['./classrooms.component.css']
})
export class ClassroomsComponent implements OnInit {

  
  classroom:[];
  crsid:Courses;
  clsrm:Classroom;
    constructor(private svc:ClassroomService, private router: Router) { }
  
    ngOnInit(): void {
      this.getAllClassroom()
    }
  
    
    getAllClassroom()
    {
      this.crsid=new Courses();
      this.svc.getAllClassroom().subscribe((response: { [x: string]: any; })=>
      {
        console.log(response);
        console.log("in getAllClassrooms");
        if(response['status']=='success')
        {
          console.log("In getAllClassrooms component..");
          this.classroom=response['data'];
          console.log(this.classroom);
        }
        else
        {
          console.log(response['error'])
        }
      });
  
    }
  

}
