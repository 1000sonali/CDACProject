import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exam } from '../modules/examschedule.module';
import { ExamscheduleService } from '../services/examschedule.service';

@Component({
  selector: 'app-examschedule-insert',
  templateUrl: './examschedule-insert.component.html',
  styleUrls: ['./examschedule-insert.component.css']
})
export class ExamscheduleInsertComponent implements OnInit {

  constructor(private svc:ExamscheduleService,private routes:Router) { }

  exm: Exam=new Exam();
  submitted;
  

  ngOnInit(): void { 
    
    this.insertExam()

  }

  insertExam()
{

  this.svc.createExam(this.exm)
  .subscribe(data => this.routes.navigate(['/examschedule']), error => console.log(error));
this.exm = new Exam();
console.log("exam schedule Inserted Successfully....");
}


}
