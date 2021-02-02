import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dailyschedule } from '../modules/dailyschedule.module';
import { DailyscheduleService } from '../services/dailyschedule.service';

@Component({
  selector: 'app-dailyschedules',
  templateUrl: './dailyschedules.component.html',
  styleUrls: ['./dailyschedules.component.css']
})
export class DailyschedulesComponent implements OnInit {

   
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
  

}
