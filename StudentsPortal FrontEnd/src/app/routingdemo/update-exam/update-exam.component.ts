import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exam } from '../modules/examschedule.module';
import { ExamscheduleService } from '../services/examschedule.service';

@Component({
  selector: 'app-update-exam',
  templateUrl: './update-exam.component.html',
  styleUrls: ['./update-exam.component.css']
})
export class UpdateExamComponent implements OnInit {

 
  id:number;
  exam:Exam;
  updtexam:Exam;
  
  
    constructor(private svc:ExamscheduleService, private route: ActivatedRoute,private routes:Router) { }
  
    ngOnInit() {
      this.exam = new Exam();
      this.updtexam=new Exam();
      this.id = this.route.snapshot.params['schNo'];
      console.log(this.id);
      this.svc.getExam(this.id)
      .subscribe((response: { [x: string]: any; })=>
      {
        console.log(response)
        if(response['status']=='success')
        {
          this.exam=response['data'];
          this.updtexam.schNo=this.exam.schNo;
          this.updtexam.examSubject=this.exam.examSubject;
          this.updtexam.examLink=this.exam.examLink;
          this.updtexam.startDateTime=this.exam.startDateTime;
          this.updtexam.endDateTime=this.exam.endDateTime;
          console.log(this.updtexam);
         
        }
        else
        {
          console.log(response['error'])
        }
      });
    }
  
  
    updateExam()
    {  
      console.log(this.updtexam);
  
      this.svc.updateExam(this.updtexam)
      .subscribe(data => this.routes.navigate(['/examschedule']),
       error => console.log(error));
      this.exam = new Exam();
    }
     


}
