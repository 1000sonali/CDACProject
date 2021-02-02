import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../modules/userlogin.module';
import { FacultyService } from '../services/faculty.service';
import { StudentService } from '../services/student.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
mailid:string;
id:number;
user:Users;
role:string;
obj:any;
  constructor(private router:Router ,private svc:UsersService, private stdsvc:StudentService, private fsvc:FacultyService) { }

  ngOnInit(): void {
  }

  sendmail()
  {
    console.log("calling service!!!");
    this.svc.getUser(this.id).subscribe((response: { [x: string]: any; })=>
    {
      console.log(response);
      if(response['status']=='success')
      {
        this.user=response['data']
       // console.log(this.user);
        this.role=this.user.role; 
            
        if(this.role=="student")
        {
            this.stdsvc.getStudent(this.id).subscribe((response: { [x: string]: any; })=>
            {
             // console.log(response)
              if(response['status']=='success')
              {
               // console.log(response['data']);
                this.obj=response['data'];
                if(this.obj.email==this.mailid)
                {
                  

                  this.svc.sendmail(this.mailid, this.id).subscribe((response: { [x: string]: any; })=>
                  {
                   // console.log(response)
                    if(response['status']=='success')
                    {
                     // console.log(response['data']);
                      var str=response['data'];
                     // console.log(str);
                     
                          this.user.password=str;
                          this.svc.updateUser(this.user).subscribe((response: { [x: string]: any; })=>
                          {
                           // console.log(response)
                            if(response['status']=='success')
                            {
                              
                              console.log("done")
                            }
                            else
                            {
                            //  console.log(response['error'])
                            }
                          });
              }
                    else
                    {
                     // console.log(response['error'])
                    }
                  });                
                }
                else{
                  alert("Enter valid credentials")
                }
              }
              else
              {
               // console.log(response['error'])
              }
            });
           
        }/////////////////////////////////

        if(this.role=="faculty")
        {
            this.fsvc.getFaculty(this.id).subscribe((response: { [x: string]: any; })=>
            {
              //console.log(response)
              if(response['status']=='success')
              {
               // console.log(response['data']);
                this.obj=response['data'];
                if(this.obj.email==this.mailid)
                {
                  

                  this.svc.sendmail(this.mailid, this.id).subscribe((response: { [x: string]: any; })=>
                  {
                   // console.log(response)
                    if(response['status']=='success')
                    {
                     // console.log(response['data']);
                      var str=response['data'];
                     // console.log(str);
                     
                          this.user.password=str;
                          this.svc.updateUser(this.user).subscribe((response: { [x: string]: any; })=>
                          {
                           // console.log(response)
                            if(response['status']=='success')
                            {
                              
                              console.log("done")
                            }
                            else
                            {
                             // console.log(response['error'])
                            }
                          });
              }
                    else
                    {
                     // console.log(response['error'])
                    }
                  });                
                }
                else
                {
                  alert("Enter valid credentials")
                }
              }
              else
              {
                console.log(response['error'])
              }
            });
           
        }/////////////////////////////
      }
        else
          {
            console.log(response['error'])
          }
    });
     
    this.router.navigate(['/login']);
    
  }
 


}
