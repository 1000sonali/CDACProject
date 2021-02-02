import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Courses } from '../modules/course.module';
import { Faculty } from '../modules/faculty.module';
import { FacultyService } from '../services/faculty.service';
import { ResthubService } from '../services/resthub.service';
import { Subjects } from '../modules/subject.module';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-subject-insert',
  templateUrl: './subject-insert.component.html',
  styleUrls: ['./subject-insert.component.css']
})
export class SubjectInsertComponent implements OnInit {

  
  constructor(private svc:SubjectService, private courseservice:ResthubService, private facultyservice:FacultyService, private router:Router) { }

  subj: Subjects=new Subjects();
  submitted;
  coptions:[]
  foptions:[]
  crsid:number;
  facultyid:number;

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

    this.facultyservice.getAllFaculty()
    .subscribe((response: { [x: string]: any; })=>
    {
      console.log(response)
      if(response['status']=='success')
      {
        this.foptions=response['data']
      }
      else
      {
        console.log(response['error'])
      }
    });


  }

insertSubject()
{
  this.subj.courseId=new Courses();
  this.subj.facultyId=new Faculty();
  console.log(this.crsid);
  this.subj.courseId.courseId=this.crsid;
  this.subj.facultyId.facultyid=this.facultyid;
  this.svc.createSubject(this.subj)
  .subscribe(data => console.log(data), error => console.log(error));
this.subj = new Subjects();
console.log("Course Inserted Successfully....");
this.router.navigate(['subject']);
 }
}


