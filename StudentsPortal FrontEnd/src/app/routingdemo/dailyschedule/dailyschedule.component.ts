import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DailyscheduleService } from '../services/dailyschedule.service';
import { Dailyschedule } from '../modules/dailyschedule.module';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-dailyschedule',
  templateUrl: './dailyschedule.component.html',
  styleUrls: ['./dailyschedule.component.css']
})
export class DailyscheduleComponent implements OnInit {

  
  dsch:[];

  ds:Dailyschedule;
    constructor(private svc:DailyscheduleService, private router: Router) { }
  
    ngOnInit(): void {
      this.getAllSchedules()
    }
  
    
    getAllSchedules()
    {
      this.svc.getAllSchedules().subscribe((response: { [x: string]: any; })=>
      {
        console.log(response);
        console.log("in getsubj");
        if(response['status']=='success')
        {
          console.log("In getSubj component..");
          this.dsch=response['data'];
          console.log(this.dsch);
        }
        else
        {
          console.log(response['error'])
        }
      });
  
    }
  
    deleteSchedule(id:number,name:string)
    {
      if(confirm("Are you sure to delete scheduled meeting of subject"+name))
        this.svc.deleteSchedule(id).subscribe(
          data => {
            console.log(data);
           this.getAllSchedules();
          },
          error => console.log(error));
    }
  
    
    updateShedule(updtsch:Dailyschedule)
   {
      this.router.navigate(['updateschedule', updtsch]);
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
