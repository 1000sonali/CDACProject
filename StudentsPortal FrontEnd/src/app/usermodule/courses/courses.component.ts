import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/loginauth/auth.service';
import { Courses } from '../modules/course.module';
import { ResthubService } from '../services/resthub.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

 
  courses:[];
  course:Courses;
  constructor(private svc:ResthubService, private router: Router,private auth:AuthService) { }

  ngOnInit(): void {
    this.getAllCourses()
   // this.courses=this.svc.getAllCourses();
  }

  
  getAllCourses()
  {
    this.svc.getAllCourses().subscribe((response: { [x: string]: any; })=>
    {
      console.log(response)
      if(response['status']=='success')
      {
        this.courses=response['data']
        console.log(this.courses)
      }
      else
      {
        console.log(response['error'])
      }
    });

  }

}
