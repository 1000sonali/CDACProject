import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exam } from '../modules/examschedule.module';
import { ExamscheduleService } from '../services/examschedule.service';
import * as XLSX from 'xlsx'
@Component({
  selector: 'app-examschedule',
  templateUrl: './examschedule.component.html',
  styleUrls: ['./examschedule.component.css']
})
export class ExamscheduleComponent implements OnInit {

  exams:[];
  exam:Exam;
    constructor(private svc:ExamscheduleService, private router: Router) { }
  
    ngOnInit(): void {
      this.getAllExamination()
     // this.courses=this.svc.getAllCourses();
    }
  
    
    getAllExamination()
    {
      this.svc.getAllExams().subscribe((response: { [x: string]: any; })=>
      {
        console.log(response)
        if(response['status']=='success')
        {
          this.exams=response['data']
          console.log(this.exams)
        }
        else
        {
          console.log(response['error'])
        }
      });
  
    }

    deleteExam(id:number)
    {
      if(confirm("Do you want to delete this exam?"))
        this.svc.deleteExamination(id).subscribe(
          data => {
            console.log(data);
           this.getAllExamination();
          },
          error => console.log(error));
    }
  
    
    updateExam(ex:Exam)
   {
      this.router.navigate(['updateexam', ex]);
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
