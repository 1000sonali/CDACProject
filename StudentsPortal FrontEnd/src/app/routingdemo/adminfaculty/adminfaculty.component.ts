import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminFaculty } from '../modules/adminfaculty.module';
import { AdminsService } from '../services/admins.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-adminfaculty',
  templateUrl: './adminfaculty.component.html',
  styleUrls: ['./adminfaculty.component.css']
})
export class AdminfacultyComponent implements OnInit {
  faculties:[];

    constructor(private svc:AdminsService, private router: Router) { }
  
    ngOnInit(): void {
      this.getAllFaculties()
    }
  
    
    getAllFaculties()
    {
     
      this.svc.getFacultys().subscribe((response: { [x: string]: any; })=>
      {
        console.log(response);
        console.log("in getAllFaculties");
        if(response['status']=='success')
        {
          console.log("In getAllFaculties component..");
          this.faculties=response['data'];
          console.log(this.faculties);
        }
        else
        {
          console.log(response['error'])
        }
      });
  
    }
  
    deleteFaculty(id:number)
    {
      if(confirm("Are you sure to delete Notes"))
        this.svc.deleteAdminFaculty(id).subscribe(
          data => {
            console.log(data);
           this.getAllFaculties();
           this.router.navigate(['updateadminfaculty']);
          },
          error => console.log(error));
    }
  
    
    updateFaculty(updt:AdminFaculty)
   {
      this.router.navigate(['updateadminfaculty', updt]);
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
