import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminsService } from '../services/admins.service';
import { AdminStudent } from '../modules/adminstudent.module';

@Component({
  selector: 'app-adminstudent-update',
  templateUrl: './adminstudent-update.component.html',
  styleUrls: ['./adminstudent-update.component.css']
})
export class AdminstudentUpdateComponent implements OnInit {
 
  id:number;
  student:AdminStudent;
  
  todayDate:any = new Date();
    constructor(private svc:AdminsService, private route: ActivatedRoute,private routes:Router) { }
  
    ngOnInit() {
      this.student = new AdminStudent();
     // this.updtclsrm=new Classroom();
      this.id = this.route.snapshot.params['prnNo'];
      console.log(this.id);
      this.svc.getStudent(this.id)
      .subscribe((response: { [x: string]: any; })=>
      {
        console.log(response)
        if(response['status']=='success')
        {
          this.student=response['data'];
         
         console.log(this.student);
         
        }
        else
        {
          console.log(response['error'])
        }
      });
    }
  
  
    updateStudent()
    {  
     
      console.log(this.student);
  
      this.svc.updateAdminStudent(this.student)
      .subscribe(data => this.routes.navigate(['/adminstudent']),
       error => console.log(error));
      this.student = new AdminStudent();
      
    }

}
