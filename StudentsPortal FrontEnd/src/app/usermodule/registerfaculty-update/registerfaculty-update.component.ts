import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Faculty } from 'src/app/routingdemo/modules/faculty.module';
import { FacultyService } from 'src/app/routingdemo/services/faculty.service';
import { UsersService } from 'src/app/routingdemo/services/users.service';
import { Users } from '../modules/userlogin.module';

@Component({
  selector: 'app-registerfaculty-update',
  templateUrl: './registerfaculty-update.component.html',
  styleUrls: ['./registerfaculty-update.component.css']
})
export class RegisterfacultyUpdateComponent implements OnInit {

 
  id:number;
  faculty:Faculty;  
  pwd:string;
  cmfpwd:string;
  str:string;
  user:Users;
 
  todayDate:any = new Date();
    constructor(private svc:FacultyService,private usr:UsersService, private route: ActivatedRoute,private routes:Router) { }
  
    ngOnInit() {
      this.faculty = new Faculty();
     this.user=new Users();
          
      this.str=sessionStorage.getItem('userid');
     this.id=parseInt(this.str);
     console.log(this.str);
      console.log(this.id);

      this.svc.getFaculty(this.id)
      .subscribe((response: { [x: string]: any; })=>
      {
        console.log(response)
        if(response['status']=='success')
        {
          this.faculty=response['data'];
        
          console.log(this.faculty);
         
        }
        else
        {
          console.log(response['error'])
        }
      });
    }
  
    updateFaculty1()
    {
      
      
      console.log("value of pwd is"+this. pwd);
      console.log("value of cmfpwd is"+this. cmfpwd);
      
      if(this.pwd==this.cmfpwd)
        this.updateFaculty();
       
      else
        alert("password and confirm password is not matched");
    }
   
    updateFaculty()
    {  
     
      console.log(this.id);
      this.user.userid=this.id;
      this.user.role="faculty";
       
       console.log(this.faculty);

    
  
      this.svc.updateFaculty(this.faculty)
      .subscribe(data => this.routes.navigate(['/login']),
       error => console.log(error));

       this.user.password=this.pwd;
       console.log(this.user);
       this.usr.updateUser(this.user)
       .subscribe(data => this.routes.navigate(['/login']),
        error => console.log(error));


      this.faculty = new Faculty();
    }
    loginUser()
    {
     this.routes.navigate(['/login']);
    }


}
