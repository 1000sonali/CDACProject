import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Courses } from '../modules/course.module';
import { DailyscheduleService } from '../services/dailyschedule.service';
import { Dailyschedule } from '../modules/dailyschedule.module';
import { ResthubService } from '../services/resthub.service';

@Component({
  selector: 'app-dailyschedule-insert',
  templateUrl: './dailyschedule-insert.component.html',
  styleUrls: ['./dailyschedule-insert.component.css']
})
export class DailyscheduleInsertComponent implements OnInit {

  todayDate:any = new Date();
  constructor(private svc:DailyscheduleService, private courseservice:ResthubService,private routes:Router) { }

  dsch: Dailyschedule=new Dailyschedule();
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

  insertDailySchedule()
{
  this.dsch.coursenamesub=new Courses();
 
  console.log(this.crsid);
  this.dsch.coursenamesub.courseId=this.crsid;
  this.dsch.coursenamesub.courseName=this.crsName;
  this.svc.createDailySchedule(this.dsch)
  .subscribe(data => this.routes.navigate(['/dailyschedule']), error => console.log(error));
this.dsch = new Dailyschedule();
console.log("Dailyschedule Inserted Successfully....");
}
}
