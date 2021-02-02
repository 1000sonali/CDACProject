import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Assignment } from '../modules/assignment.module';
import { AssignmentService } from '../services/assignment.service';
import { Subjects } from '../modules/subject.module';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-assignment-insert',
  templateUrl: './assignment-insert.component.html',
  styleUrls: ['./assignment-insert.component.css']
})
export class AssignmentInsertComponent implements OnInit {
 
  todayDate:any = new Date();
  constructor(private svc:AssignmentService, private subjectservice:SubjectService,private routes:Router) { }

  asn: Assignment=new Assignment();
  submitted;
  soptions:[]

  subid:number;
 subName:string;

  ngOnInit(): void { 
    this.subjectservice.getAllSubjects()
    .subscribe((response: { [x: string]: any; })=>
    {
      console.log(response)
      if(response['status']=='success')
      {
        this.soptions=response['data']
      }
      else
      {
        console.log(response['error'])
      }
    });


  }

  insertAssignment()
{
  this.asn.subname=new Subjects();
  
  
  this.asn.subname.subjectId=this.subid;
  console.log(this.asn.subname.subjectId)
  this.asn.subname.subjectName=this.subName;
  console.log(this.subid);
  this.svc.createAssignment(this.asn)
  .subscribe(data => this.routes.navigate(['/assignment']), error => console.log(error));
this.asn = new Assignment();
console.log("Dailyschedule Inserted Successfully....");
}

}
