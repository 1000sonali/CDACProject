import { Component, OnInit } from '@angular/core';
import { AdminFaculty } from '../modules/adminfaculty.module';
import { AdminsService } from '../services/admins.service';
import { Faculty } from '../modules/faculty.module';
import { FacultyService } from '../services/faculty.service';
import { Users } from '../modules/userlogin.module';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerfaculty',
  templateUrl: './registerfaculty.component.html',
  styleUrls: ['./registerfaculty.component.css']
})
export class RegisterfacultyComponent implements OnInit {

pass:string;
uid:number;

  constructor(private svc:FacultyService, private admins:AdminsService, private usersvc:UsersService,private route:Router) { }
  faculty: Faculty = new Faculty();
  submitted
  getfaculty:AdminFaculty=new AdminFaculty();
id:number;
pwd:string;
cmfpwd:string;
  user:Users;

  ngOnInit(): void {
    
    this.user=new Users();
  }
  registerfaculty1()
  {
    
    
    console.log("value of pwd is"+this. pwd);
    console.log("value of cmfpwd is"+this. cmfpwd);
    
    if(this.pwd==this.cmfpwd)
      //this.registerfaculty();
      alert("ok");
    else
      alert("password and confirm password is not matched");
  }
  
  registerfaculty() {
    
    this.user.userid=this.faculty.facultyid;
    this.user.role="faculty";
    this.user.password=this.pass;

    this.admins.getFaculty(this.user.userid)
    .subscribe((response: { [x: string]: any; })=>
    {
      if(response['status']=='success')
      {
       console.log(response);
       this.getfaculty.facultyid=response['data'].facultyid;
      this.getfaculty.firstname=response['data'].firstname;
      this.getfaculty.lastname=response['data'].lastname;
      }
      else
      {
        console.log(response['error'])
      }
    });
    while(this.getfaculty.facultyid==undefined)
    {
      if(this.getfaculty.facultyid){
      break;
      }
    }
    this.register2();
  }


  register2()
  {
    if(this.faculty.facultyid==this.getfaculty.facultyid){
      
      if(this.getfaculty.firstname==this.faculty.fname){
       
        if(this.getfaculty.lastname==this.faculty.lname){
          
          this.svc.createFaculty(this.faculty)
          .subscribe(data =>{ console.log(data);
          }, error => console.log(error));
          console.log("faculty inserted");

          this.usersvc.createUser(this.user)
          .subscribe(data => console.log(data)
            , error => console.log(error));

            console.log("user registered");
        this.faculty = new Faculty();
       
        
        alert("You are Registered Successfully....");
        this.route.navigate(['/registerfaculty']);
        }
      }
    }else{
      alert("Your Data is Incorrect Please Check....");
    }
    }
    
    loginUser()
    {
     this.route.navigate(['/login']);
    }  
}
