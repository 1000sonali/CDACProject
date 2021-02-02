import { Component, OnInit } from '@angular/core';
import { AdminsService } from '../services/admins.service';
import { AdminStudent } from '../modules/adminstudent.module';
import { Courses } from '../modules/course.module';
import { Student } from '../modules/student.module';
import { StudentService } from '../services/student.service';
import { Users } from '../modules/userlogin.module';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { ResthubService } from '../services/resthub.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 
  constructor(private route:Router, private admins:AdminsService, private svc1:ResthubService, private svc:StudentService, private usersvc:UsersService) { }
  student: Student = new Student();
  submitted
  crsid:number;
  pwd:string;
  cmfpwd:string;
newuser:Users;
coptions:[]
getstud:AdminStudent;

  ngOnInit(): void {
    this.newuser=new Users();
    this.getstud=new AdminStudent();
    this.svc1.getAllCourses().subscribe((response: { [x: string]: any; })=>
    {
      console.log(response)
      if(response['status']=='success')
      {
        this.coptions=response['data']
        console.log(this.coptions)
      }
      else
      {
        console.log(response['error'])
      }
    });
  }
  registeruser1()
  {
    
    
    console.log("value of pwd is"+this. pwd);
    console.log("value of cmfpwd is"+this. cmfpwd);
    
    if(this.pwd==this.cmfpwd)
      this.registeruser();
     
    else
      alert("password and confirm password is not matched");
  }
  
  
  registeruser() {
    this.newuser.userid=this.student.pId;
    this.newuser.role="student";
    this.newuser.password=this.pwd;
    this.admins.getStudent(this.student.pId)
    .subscribe((response: { [x: string]: any; })=>
    {
      console.log(response)
      if(response['status']=='success')
      {
        this.getstud.prnNo=response['data'].prnNo; 
        this.getstud.firstname=response['data'].firstname;       
        this.getstud.lastname=response['data'].lastname; 
        console.log(this.getstud);
       
      }
      else
      {
        console.log(response['error'])
      }
    });

    console.log(this.getstud.prnNo);
    console.log(this.getstud.firstname);
    console.log(this.getstud.lastname);

    console.log(this.student.pId);
    console.log(this.student.fname);
    console.log(this.student.lname);
      console.log("Course:: "+this.student.coursename);
      
    if(this.getstud.prnNo==this.student.pId){
      if(this.getstud.firstname==this.student.fname){
        if(this.getstud.lastname==this.student.lname){
    this.student.coursename=new Courses();
   
    this.student.coursename.courseId=this.crsid;
       this.svc.createStudent(this.student)
      .subscribe(data =>{ console.log(data);
        this.usersvc.createUser(this.newuser)
      .subscribe(data => console.log(data)
        , error => console.log(error));
      }, error => console.log(error));
      console.log("in metod component"+this.student)
     
    this.student = new Student();
      this.crsid=0;
      this.pwd="";
    
    alert("You are Registered Successfully....");
    this.route.navigate(['/register']);
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
