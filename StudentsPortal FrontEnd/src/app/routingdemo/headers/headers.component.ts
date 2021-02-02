import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/loginauth/auth.service';
import { Student } from '../modules/student.module';
import { ResthubService } from '../services/resthub.service';


@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
  courses:[]
  public isButtonVisible = false;
  public isButton=true;
  student:Student;

  constructor(private authsvc:AuthService, private svc:ResthubService) { }

  ngOnInit(): void {
     if(this.authsvc.isLoggedIn())
     {
       this.isButton=false;
       this.isButtonVisible=true;

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

 sendMail()
 {

   console.log("in send mail of login")
   this.svc.sendMail("aartimadre@gmail.com");
   
 }

}




