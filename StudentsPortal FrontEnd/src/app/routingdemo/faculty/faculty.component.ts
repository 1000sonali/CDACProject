import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../services/faculty.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
faculties:[]
demo= '.xlsx';
filename:string;

  constructor(private svc:FacultyService) { }

  ngOnInit(): void {
    this.getAllFaculties();
  }

  getAllFaculties()
  {
    this.svc.getAllFaculty().subscribe((response: { [x: string]: any; })=>
    {
      console.log(response)
      if(response['status']=='success')
      {
        this.faculties=response['data']
        console.log(this.faculties)
      }
      else
      {
        console.log(response['error'])
      }
    });
  }

  
  deleteCourse(id:number)
  {
    if(confirm("Are you sure to delete Notes"))

      this.svc.deleteFaculty(id).subscribe(
        data => {
          console.log(data);
         this.getAllFaculties();
        },
        error => console.log(error));
  }

 
 
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
