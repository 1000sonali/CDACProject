import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subjects } from '../modules/subject.module';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  subjects:[];
  sub:Subjects;
    constructor(private svc:SubjectService, private router: Router) { }
  
    ngOnInit(): void {
      this.getAllSubjects()
    }
  
    
    getAllSubjects()
    {
      this.svc.getAllSubjects().subscribe((response: { [x: string]: any; })=>
      {
        console.log(response);
        console.log("in getsubj");
        if(response['status']=='success')
        {
          console.log("In getSubj component..");
          this.subjects=response['data'];
          console.log(this.subjects);
        }
        else
        {
          console.log(response['error'])
        }
      });
  
    }

}
