import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subjects } from '../modules/subject.module';
import { SubjectService } from '../services/subject.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

 
subjects:[];
sub:Subjects;
  constructor(private svc:SubjectService, private router: Router) { }

  ngOnInit(): void {
    this.getAllSubjects()
  }

  
  getAllSubjects()
  {
    this.svc.getAllSubjects().subscribe((response: { [x: string]: any; })=>
    {
      console.log(response);
      console.log("in getsubj");
      if(response['status']=='success')
      {
        console.log("In getSubj component..");
        this.subjects=response['data'];
        console.log(this.subjects);
      }
      else
      {
        console.log(response['error'])
      }
    });

  }
 
  deleteSubject(id:number)
  {
    if(confirm("Do you want to delete this subject record..."))
      this.svc.deleteSubject(id).subscribe(
        data => {
          console.log(data);
         this.getAllSubjects();
        },
        error => console.log(error));
  }

  
 updateSubject(subj:Subjects)
 {
    this.router.navigate(['updatesubject', subj]);
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
