import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/routingdemo/modules/student.module';
import { StudentService } from 'src/app/routingdemo/services/student.service';
import { Users } from '../modules/userlogin.module';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-register-update',
  templateUrl: './register-update.component.html',
  styleUrls: ['./register-update.component.css']
})
export class RegisterUpdateComponent implements OnInit {

  
  id:number;
  student:Student;
  
  pwd:string;
  cmfpwd:string;
  str:string;
  user:Users;
  todayDate:any = new Date();
    constructor(private std:StudentService, private route: ActivatedRoute,private routes:Router, private usr:UsersService) { }
  
    ngOnInit() {

      this.student = new Student();
      this.user=new Users();

      this.str=sessionStorage.getItem('userid');
     this.id=parseInt(this.str);
     console.log(this.str);
      console.log(this.id);
     
    
    this.std.getStudent(this.id).subscribe((response: { [x: string]: any; })=>
    {
     
      if(response['status']=='success')
      {
        
        this.student=response['data'];
        
      }
      else
      {
        console.log(response['error'])
      }
    });



    }
  
    registeruser1()
    {
     
      if(this.pwd==this.cmfpwd)
        this.updatestudent();      
      else
        alert("password and confirm password is not matched");
    }
   
    updatestudent()
    {  
   
    console.log(this.id);
    this.user.userid=this.id;
    this.user.role="student";
      console.log(this.student.pId);
  
      this.std.updateStudent(this.student)
      .subscribe(data => this.routes.navigate(['/login']),
       error => console.log(error));
      this.student = new Student();
     
      this.user.password=this.pwd;
      console.log(this.user);
      this.usr.updateUser(this.user)
      .subscribe(data => this.routes.navigate(['/login']),
       error => console.log(error));
      this.student = new Student();
    
    }
   
  
    loginUser()
    {
     this.routes.navigate(['/login']);
    }

}
