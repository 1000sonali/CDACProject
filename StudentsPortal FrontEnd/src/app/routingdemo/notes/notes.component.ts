import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Courses } from '../modules/course.module';
import { Notes } from '../modules/notes.module';
import { NotesService } from '../services/notes.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

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

  deleteNotes(id:number)
  {
    if(confirm("Are you sure to delete Notes"))
      this.svc.deleteNotes(id).subscribe(
        data => {
          console.log(data);
         this.getAllNotes();
        },
        error => console.log(error));
  }

  
  updateNotes(updtnts:Notes)
 {
    this.router.navigate(['updatenotes', updtnts]);
 }


 
 demo= '.xlsx';
 filename:string;

 printComponent(cmpName) {
  console.log(cmpName);
  /*this.abc=document.getElementById(cmpName).innerHTML;
  console.log("id of component is"+this.abc);*/
 let printContents = document.getElementById(cmpName).innerHTML;
 console.log(printContents);
 let originalContents = document.body.innerHTML;

 document.body.innerHTML = printContents;

 window.print();

 document.body.innerHTML = originalContents;
}

 exportexcel(): void
  {
    this.filename=prompt('Enter Your Filename');
   this.filename=this.filename.concat(this.demo);
    console.log(this.filename);
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.filename);
 
  }

  
}
