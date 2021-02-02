import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Assignment } from '../modules/assignment.module';
import { AssignmentService } from '../services/assignment.service';

@Component({
  selector: 'app-assignment-update',
  templateUrl: './assignment-update.component.html',
  styleUrls: ['./assignment-update.component.css']
})
export class AssignmentUpdateComponent implements OnInit {

  id:number;
  asn:Assignment;
  updtasn:Assignment;
  
  todayDate:any = new Date();
    constructor(private svc:AssignmentService, private route: ActivatedRoute,private routes:Router) { }
  
    ngOnInit() {
      this.asn = new Assignment();
      this.updtasn=new Assignment();
      this.id = this.route.snapshot.params['assignNo'];
      console.log(this.id);
      this.svc.getAssignment(this.id)
      .subscribe((response: { [x: string]: any; })=>
      {
        console.log(response)
        if(response['status']=='success')
        {
          this.asn=response['data'];
         
          this.updtasn.assignNo=this.asn.assignNo;
          this.updtasn.assignName=this.asn.assignName;
          this.updtasn.DateOfSubmission=this.asn.DateOfSubmission;
          this.updtasn.assignLink=this.asn.assignLink;
          this.updtasn.subname=this.asn.subname;
          console.log(this.asn);
         
        }
        else
        {
          console.log(response['error'])
        }
      });
    }
  
  
    updateAssignment()
    {  
      this.updtasn.assignNo=this.asn.assignNo;
      this.updtasn.assignName=this.asn.assignName;
      this.updtasn.DateOfSubmission=this.asn.DateOfSubmission;
      this.updtasn.assignLink=this.asn.assignLink;
      this.updtasn.subname=this.asn.subname;

      console.log("updated obj"+this.asn.assignNo);
  
      this.svc.updateAssignment(this.asn)
      .subscribe(data => this.routes.navigate(['/assignment']),
       error => console.log(error));
      this.asn = new Assignment();
    }
     

}
