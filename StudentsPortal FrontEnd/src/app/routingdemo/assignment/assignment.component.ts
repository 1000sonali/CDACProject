import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Assignment } from '../modules/assignment.module';
import { AssignmentService } from '../services/assignment.service';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  assignments:[];

asn:Assignment;
  constructor(private svc:AssignmentService, private router: Router) { }

  ngOnInit(): void {
    this.getAllAssignment()
  }

  
  getAllAssignment()
  {
    this.svc.getAllAssignment().subscribe((response: { [x: string]: any; })=>
    {
      console.log(response);
      console.log("in getAssign");
      if(response['status']=='success')
      {
        console.log("In getAssign component..");
        this.assignments=response['data'];
        console.log(this.assignments);
      }
      else
      {
        console.log(response['error'])
      }
    });

  }

  deleteAssignment(id:number,name:string)
  {
    if(confirm("Are you sure to delete assignment"+name))
      this.svc.deleteAssignment(id).subscribe(
        data => {
          console.log(data);
         this.getAllAssignment();
        },
        error => console.log(error));
  }

  
  updateAssignment(updtasgn:Assignment)
 {
    this.router.navigate(['updateassignment', updtasgn]);
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
