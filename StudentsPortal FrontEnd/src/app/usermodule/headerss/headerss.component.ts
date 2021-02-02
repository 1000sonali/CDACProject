import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/loginauth/auth.service';
import { Faculty } from 'src/app/routingdemo/modules/faculty.module';
import { Student } from 'src/app/routingdemo/modules/student.module';
import { StudentService } from 'src/app/routingdemo/services/student.service';
import { ResthubService } from '../services/resthub.service';

@Component({
  selector: 'app-headerss',
  templateUrl: './headerss.component.html',
  styleUrls: ['./headerss.component.css']
})
export class HeaderssComponent implements OnInit {
  courses:[]
  public isButtonVisible = false;
  public isButton=true;
  public isstudent=true;
  student:Student;
faculty:Faculty;
  constructor(private authsvc:AuthService, private std:StudentService,private svc:ResthubService, private router:Router) { }

  ngOnInit(): void {
     if(this.authsvc.isLogged())
     {
       this.isButton=false;
       this.isButtonVisible=true;
       this.student=new Student();
        this.faculty=new Faculty();
        if((sessionStorage.getItem('userrole'))=="faculty")
        this.isstudent=false;
     }
     
     this.getAllCourses();
     
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

  logout()
 {
    this.authsvc.logout();
    this.isButton=true;
       this.isButtonVisible=false;
 }


}

