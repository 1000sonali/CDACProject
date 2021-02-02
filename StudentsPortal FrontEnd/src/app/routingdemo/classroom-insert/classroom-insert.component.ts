import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Classroom } from '../modules/classroom.module';
import { ClassroomService } from '../services/classroom.service';
import { Courses } from '../modules/course.module';
import { ResthubService } from '../services/resthub.service';

@Component({
  selector: 'app-classroom-insert',
  templateUrl: './classroom-insert.component.html',
  styleUrls: ['./classroom-insert.component.css']
})
export class ClassroomInsertComponent implements OnInit {

  
  todayDate:any = new Date();
  constructor(private svc:ClassroomService, private courseservice:ResthubService,private routes:Router) { }

  clsrm: Classroom=new Classroom();
  submitted;
  coptions:[]

  crsid:number;
 crsName:string;

  ngOnInit(): void { 
    this.courseservice.getAllCourses()
    .subscribe((response: { [x: string]: any; })=>
    {
      console.log(response)
      if(response['status']=='success')
      {
        this.coptions=response['data']
      }
      else
      {
        console.log(response['error'])
      }
    });


  }

  insertClassRoom()
{
  this.clsrm.crsClassRoom=new Courses();
 
  console.log(this.crsid);
  this.clsrm.crsClassRoom.courseId=this.crsid;
  this.clsrm.crsClassRoom.courseName=this.crsName;
  this.svc.createClassRoom(this.clsrm)
  .subscribe(data => this.routes.navigate(['/classroom']), error => console.log(error));
this.clsrm = new Classroom();
console.log("ClassRoom Inserted Successfully....");
}

}
