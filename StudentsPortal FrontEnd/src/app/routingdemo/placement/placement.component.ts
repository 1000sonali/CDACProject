import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Placement } from '../modules/placement.module';
import { PlacementService } from '../services/placement.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-placement',
  templateUrl: './placement.component.html',
  styleUrls: ['./placement.component.css']
})
export class PlacementComponent implements OnInit {

  
placements:[];

  constructor(private svc:PlacementService, private router: Router) { }

  ngOnInit(): void {
    this.getAllRecords()
  }

  
  getAllRecords()
  {
    this.svc.getAllPlaced().subscribe((response: { [x: string]: any; })=>
    {
      console.log(response)
      if(response['status']=='success')
      {
        this.placements=response['data']
        console.log(this.placements)
      }
      else
      {
        console.log(response['error'])
      }
    });

  }
 
  deleteRecord(id:string)
  {
    if(confirm("Do you want to delete this placement record..."))
      this.svc.deleteRecord(id).subscribe(
        data => {
          console.log(data);
         this.getAllRecords();
        },
        error => console.log(error));
  }

  
 updateRecord(places:Placement)
 {
    this.router.navigate(['updaterecord', places]);
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
