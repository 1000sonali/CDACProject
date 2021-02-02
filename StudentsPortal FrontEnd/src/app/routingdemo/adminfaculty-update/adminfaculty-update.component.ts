import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminFaculty } from '../modules/adminfaculty.module';
import { AdminsService } from '../services/admins.service';

@Component({
  selector: 'app-adminfaculty-update',
  templateUrl: './adminfaculty-update.component.html',
  styleUrls: ['./adminfaculty-update.component.css']
})
export class AdminfacultyUpdateComponent implements OnInit {
  id:number;
  faculty:AdminFaculty;
  
  todayDate:any = new Date();
    constructor(private svc:AdminsService, private route: ActivatedRoute,private routes:Router) { }
  
    ngOnInit() {
      this.faculty = new AdminFaculty();
    
      this.id = this.route.snapshot.params['facultyid'];
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
  
  
    updateFaculty()
    {  
     
      console.log(this.faculty);
  
      this.svc.updateAdminFaculty(this.faculty)
      .subscribe(data => this.routes.navigate(['/adminfaculty']),
       error => console.log(error));
      this.faculty = new AdminFaculty();
    }

}
