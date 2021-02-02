import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginAndRegisterControlService } from 'src/app/routingdemo/services/login-and-register-control.service';
import { Courses } from 'src/app/usermodule/modules/course.module';
import { Users } from '../modules/userlogin.module';
import { ResthubService } from '../services/resthub.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private svc:LoginAndRegisterControlService,private router:Router, private crs:ResthubService) { }
uid:number;
pass:string;
user:Users;


  ngOnInit(): void {
    this.user = new Users();
  }

  loginuser(){
    console.log("User:: "+this.user);
    this.svc.getUser(this.uid)
    .subscribe((response: { [x: string]: any; })=>
    {
      console.log(response)
      if(response['status']=='success')
      {
        this.user=response['data'];
      console.log(this.user);
        if(this.pass==this.user.password)
        {
         console.log(this.user.role);
          if(this.user.role=='admin'){
            var str= this.user.userid.toString();
            console.log("Valid Admin");
            sessionStorage.setItem('userrole', this.user.role);  
            sessionStorage.setItem('userid',str);
           
          this.router.navigate(['/course']);
          }

          else{
            var str= this.user.userid.toString();
            console.log("Valid User");
            sessionStorage.setItem('userrole', this.user.role);  
            sessionStorage.setItem('userid',str);
            this.router.navigate(['/stdcourse']);
          }
        }
      }
      else
      {
        console.log(response['error'])
      }
    });
   
    
  }

 
}
