import { Component, OnInit } from '@angular/core';
import { Courses } from '../modules/course.module';
import { ResthubService } from '../services/resthub.service';

@Component({
  selector: 'app-course-insert',
  templateUrl: './course-insert.component.html',
  styleUrls: ['./course-insert.component.css']
})
export class CourseInsertComponent implements OnInit {

  constructor(private svc:ResthubService) { }
  course: Courses = new Courses();
  submitted

  ngOnInit(): void {
  }
  
  saveCourse() {
    this.svc.createCourse(this.course)
      .subscribe(data => console.log(data), error => console.log(error));
    this.course = new Courses();
    console.log("Course Inserted Successfully....");
  }

 
 
}
