import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exam } from '../modules/examschedule.module';
import { ExamscheduleService } from '../services/examschedule.service';

@Component({
  selector: 'app-examschedules',
  templateUrl: './examschedules.component.html',
  styleUrls: ['./examschedules.component.css']
})
export class ExamschedulesComponent implements OnInit {

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


}
