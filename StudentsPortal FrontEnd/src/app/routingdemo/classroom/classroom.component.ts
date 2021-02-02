import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Classroom } from '../modules/classroom.module';
import { ClassroomService } from '../services/classroom.service';
import { Courses } from '../modules/course.module';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent implements OnInit {

  
  
  classroom:[];
  crsid:Courses;
  clsrm:Classroom;
    constructor(private svc:ClassroomService, private router: Router) { }
  
    ngOnInit(): void {
      this.getAllClassroom()
    }
  
    
    getAllClassroom()
    {
      this.crsid=new Courses();
      this.svc.getAllClassroom().subscribe((response: { [x: string]: any; })=>
      {
        console.log(response);
        console.log("in getAllClassrooms");
        if(response['status']=='success')
        {
          console.log("In getAllClassrooms component..");
          this.classroom=response['data'];
          console.log(this.classroom);
        }
        else
        {
          console.log(response['error'])
        }
      });
  
    }
  
    deleteClassRoom(id:number)
    {
      if(confirm("Are you sure to delete Notes"))
        this.svc.deleteClassRoom(id).subscribe(
          data => {
            console.log(data);
           this.getAllClassroom();
          },
          error => console.log(error));
    }
  
    
    updateClassRoom(updtcls:Classroom)
   {
      this.router.navigate(['updateclassroom', updtcls]);
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
