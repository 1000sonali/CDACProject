import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminFaculty } from '../modules/adminfaculty.module';
import { AdminsService } from '../services/admins.service';

@Component({
  selector: 'app-adminfaculty-insert',
  templateUrl: './adminfaculty-insert.component.html',
  styleUrls: ['./adminfaculty-insert.component.css']
})
export class AdminfacultyInsertComponent implements OnInit {

 
  constructor(private svc:AdminsService, private route:Router) { }
  faculty: AdminFaculty = new AdminFaculty();
  submitted

  ngOnInit(): void {
  
  }
  
  saveFaculty() {
   
    this.svc.createAdminFaculty(this.faculty)
      .subscribe(data => console.log(data), error => console.log(error));
    this.faculty = new AdminFaculty();
    console.log("Course Inserted Successfully....");
    alert("Faculty got registered!! Get the faculty ID ");
    this.route.navigate["/adminfaculty"];
  }

 
}
