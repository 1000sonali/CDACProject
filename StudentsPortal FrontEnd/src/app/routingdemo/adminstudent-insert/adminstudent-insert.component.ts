import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminsService } from '../services/admins.service';
import { AdminStudent } from '../modules/adminstudent.module';

@Component({
  selector: 'app-adminstudent-insert',
  templateUrl: './adminstudent-insert.component.html',
  styleUrls: ['./adminstudent-insert.component.css']
})
export class AdminstudentInsertComponent implements OnInit {

 
  constructor(private svc:AdminsService, private route:Router) { }
  student: AdminStudent = new AdminStudent();
  submitted

  ngOnInit(): void {
  
  }
  
  saveStudent() {
    this.svc.createAdminStudent(this.student)
      .subscribe(data => console.log(data), error => console.log(error));
    this.student = new AdminStudent();
    console.log("Course Inserted Successfully....");
    alert("Student got registered!! Get the student ID ");
    this.route.navigate["/adminstudent"];
  }

 
}
