import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Assignment } from '../modules/assignment.module';
import { AssignmentService } from '../services/assignment.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

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

}
