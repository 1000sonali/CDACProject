import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Courses } from '../modules/course.module';
import { Notes } from '../modules/notes.module';
import { NotesService } from '../services/notes.service';
import { ResthubService } from '../services/resthub.service';

@Component({
  selector: 'app-notes-insert',
  templateUrl: './notes-insert.component.html',
  styleUrls: ['./notes-insert.component.css']
})
export class NotesInsertComponent implements OnInit {
  todayDate:any = new Date();
  constructor(private svc:NotesService, private courseservice:ResthubService,private routes:Router) { }

  nts: Notes=new Notes();
  submitted;
  coptions:[]

  crsid:number;
 crsName:string;

  ngOnInit(): void { 
    this.courseservice.getAllCourses()
    .subscribe((response: { [x: string]: any; })=>
    {
      console.log(response)
      if(response['status']=='success')
      {
        this.coptions=response['data']
      }
      else
      {
        console.log(response['error'])
      }
    });


  }

  insertNotes()
{
  this.nts.crsNotes=new Courses();
 
  console.log(this.crsid);
  this.nts.crsNotes.courseId=this.crsid;
  this.nts.crsNotes.courseName=this.crsName;
  this.svc.createNotes(this.nts)
  .subscribe(data => this.routes.navigate(['/notes']), error => console.log(error));
this.nts = new Notes();
console.log("Notes Inserted Successfully....");
}

}
