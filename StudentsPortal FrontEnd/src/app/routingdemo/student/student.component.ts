import { Component, OnInit } from '@angular/core';

import * as XLSX from 'xlsx';
import { Student } from '../modules/student.module';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students:[]
  demo= '.xlsx';
  filename:string;
  courseid:Student[];
  i:number;
    constructor(private svc:StudentService) { }
  
    ngOnInit(): void {
      this.getAllStudents();
      for( this.i=0;this.i<this.students.length;this.i++)
      {
       // this.courseid[this.i]=this.students[this.i].coursename.courseId;
      }
    }
  
    getAllStudents()
    {
      this.svc.getAllStudents().subscribe((response: { [x: string]: any; })=>
      {
        console.log(response)
        if(response['status']=='success')
        {
          this.students=response['data']
          
          console.log(this.students)
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
  
        this.svc.deleteStudent(id).subscribe(
          data => {
            console.log(data);
           this.getAllStudents();
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
