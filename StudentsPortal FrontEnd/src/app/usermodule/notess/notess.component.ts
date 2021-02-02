import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Courses } from '../modules/course.module';
import { Notes } from '../modules/notes.module';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-notess',
  templateUrl: './notess.component.html',
  styleUrls: ['./notess.component.css']
})
export class NotessComponent implements OnInit {

  notes:[];
  crsid:Courses;
  nts:Notes;
    constructor(private svc:NotesService, private router: Router) { }
  
    ngOnInit(): void {
      this.getAllNotes()
    }

  
  getAllNotes()
  {
    this.crsid=new Courses();
    this.svc.getAllNotes().subscribe((response: { [x: string]: any; })=>
    {
      console.log(response);
      console.log("in getnotes");
      if(response['status']=='success')
      {
        console.log("In getnts component..");
        this.notes=response['data'];
        console.log(this.notes);
      }
      else
      {
        console.log(response['error'])
      }
    });

  }

}
