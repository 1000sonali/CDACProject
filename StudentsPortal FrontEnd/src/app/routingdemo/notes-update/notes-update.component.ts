import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Notes } from '../modules/notes.module';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-notes-update',
  templateUrl: './notes-update.component.html',
  styleUrls: ['./notes-update.component.css']
})
export class NotesUpdateComponent implements OnInit {

  id:number;
  nts:Notes;
  updtnts:Notes;
  
  todayDate:any = new Date();
    constructor(private svc:NotesService, private route: ActivatedRoute,private routes:Router) { }
  
    ngOnInit() {
      this.nts = new Notes();
      this.updtnts=new Notes();
      this.id = this.route.snapshot.params['nid'];
      console.log(this.id);
      this.svc.getNotes(this.id)
      .subscribe((response: { [x: string]: any; })=>
      {
        console.log(response)
        if(response['status']=='success')
        {
          this.nts=response['data'];
         
          this.updtnts.nid=this.nts.nid;
          this.updtnts.noteLink=this.nts.noteLink;
          
          console.log(this.updtnts);
         
        }
        else
        {
          console.log(response['error'])
        }
      });
    }
  
  
    updatetNotes()
    {  
          this.updtnts.nid=this.nts.nid;
          this.updtnts.noteLink=this.nts.noteLink;
          //this.updtnts.crsNotes.courseName=this.nts.crsNotes.courseName;
          console.log(this.updtnts);
  
      this.svc.updateNotes(this.updtnts)
      .subscribe(data => this.routes.navigate(['/notes']),
       error => console.log(error));
      this.nts = new Notes();
    }


}
