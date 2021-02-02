import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminsService } from '../services/admins.service';
import { AdminStudent } from '../modules/adminstudent.module';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-adminstudent',
  templateUrl: './adminstudent.component.html',
  styleUrls: ['./adminstudent.component.css']
})
export class AdminstudentComponent implements OnInit {
  
  students:[];

    constructor(private svc:AdminsService, private router: Router) { }
  
    ngOnInit(): void {
      this.getAllStudents()
    }
  
    
    getAllStudents()
    {
     
      this.svc.getStudents().subscribe((response: { [x: string]: any; })=>
      {
        console.log(response);
        console.log("in getAllClassrooms");
        if(response['status']=='success')
        {
          console.log("In getAlllstudents component..");
          this.students=response['data'];
          console.log(this.students);
        }
        else
        {
          console.log(response['error'])
        }
      });
  
    }
  
    deleteStudent(id:number)
    {
      if(confirm("Are you sure to delete Notes"))
        this.svc.deleteAdminStudent(id).subscribe(
          data => {
            console.log(data);
           this.getAllStudents();
           this.router.navigate(['adminstudent']);
          },
          error => console.log(error));
    }
  
    
    updateStudent(updt:AdminStudent)
   {
      this.router.navigate(['updateadminstudent', updt]);
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
