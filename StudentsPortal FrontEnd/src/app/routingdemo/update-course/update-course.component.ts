import { NumberFormatStyle } from '@angular/common';
import { createSelf } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Courses } from '../modules/course.module';
import { CourseComponent } from '../course/course.component';
import { ResthubService } from '../services/resthub.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {

  id:number;
  course:Courses;
  updtcourse:Courses;
  
  
    constructor(private svc:ResthubService, private route: ActivatedRoute) { }
  
    ngOnInit() {
      this.course = new Courses();
      this.updtcourse=new Courses();
      this.id = this.route.snapshot.params['courseId'];
      console.log(this.id);
      this.svc.getCourse(this.id)
      .subscribe((response: { [x: string]: any; })=>
      {
        console.log(response)
        if(response['status']=='success')
        {
          this.course=response['data'];
          this.updtcourse.courseId=this.course.courseId;
          this.updtcourse.courseName=this.course.courseName;
          console.log("get"+this.course.courseName);
         
        }
        else
        {
          console.log(response['error'])
        }
      });
    }
  
  
    updateCourse()
    {  
      console.log(this.updtcourse);
  
      this.svc.updateCourse(this.updtcourse)
      .subscribe(data => console.log(data),
       error => console.log(error));
      this.course = new Courses();
    }
     
   
}
