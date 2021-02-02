import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subjects } from '../modules/subject.module';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-update-subject',
  templateUrl: './update-subject.component.html',
  styleUrls: ['./update-subject.component.css']
})
export class UpdateSubjectComponent implements OnInit {
  id:number;
  subj:Subjects;
  constructor(private svc:SubjectService, private route: ActivatedRoute) { }
  
  updtsubj:Subjects;
  
  
   
    
  
  ngOnInit(): void {
    this.subj = new Subjects();
    this.updtsubj=new Subjects();
    this.id = this.route.snapshot.params['subjectId'];
    console.log(this.id);
    this.svc.getSubject(this.id)
    .subscribe((response: { [x: string]: any; })=>
    {
      console.log(response)
      if(response['status']=='success')
      {
        this.subj=response['data'];
       
        console.log("Get"+this.subj.subjectName);
       
      }
      else
      {
        console.log(response['error'])
      }
    });
  }

  updateSubject()
  {  
    console.log("Get data"+this.subj.subjectName);
    this.updtsubj.subjectId=this.subj.subjectId;
    this.updtsubj.subjectName=this.subj.subjectName;
    this.svc.updateSubject(this.updtsubj)
    .subscribe(data => console.log(data),
     error => console.log(error));
    this.subj = new Subjects();
  }
   
      
}
