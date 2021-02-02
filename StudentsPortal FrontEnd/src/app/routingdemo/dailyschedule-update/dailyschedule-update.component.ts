import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DailyscheduleService } from '../services/dailyschedule.service';
import { Dailyschedule } from '../modules/dailyschedule.module';

@Component({
  selector: 'app-dailyschedule-update',
  templateUrl: './dailyschedule-update.component.html',
  styleUrls: ['./dailyschedule-update.component.css']
})
export class DailyscheduleUpdateComponent implements OnInit {

  id:number;
  dsch:Dailyschedule;
  updtsch:Dailyschedule;
  
  todayDate:any = new Date();
    constructor(private svc:DailyscheduleService, private route: ActivatedRoute,private routes:Router) { }
  
    ngOnInit() {
      this.dsch = new Dailyschedule();
      this.updtsch=new Dailyschedule();
      this.id = this.route.snapshot.params['dailyId'];
      console.log(this.id);
      this.svc.getDailySchedule(this.id)
      .subscribe((response: { [x: string]: any; })=>
      {
        console.log(response)
        if(response['status']=='success')
        {
          this.dsch=response['data'];
         
          this.updtsch.dailyId=this.dsch.dailyId;
          this.updtsch.subject=this.dsch.subject;
          this.updtsch.dailySchLink=this.dsch.dailySchLink;
          this.updtsch.startDateTime=this.dsch.startDateTime;
          this.updtsch.endDateTime=this.dsch.endDateTime;
          console.log(this.updtsch);
         
        }
        else
        {
          console.log(response['error'])
        }
      });
    }
  
  
    updatetDailySchedule()
    {  
      this.updtsch.dailyId=this.dsch.dailyId;
      this.updtsch.subject=this.dsch.subject;
      this.updtsch.dailySchLink=this.dsch.dailySchLink;
      this.updtsch.startDateTime=this.dsch.startDateTime;
      this.updtsch.endDateTime=this.dsch.endDateTime;

      console.log(this.updtsch);
  
      this.svc.updateSchedule(this.updtsch)
      .subscribe(data => this.routes.navigate(['/dailyschedule']),
       error => console.log(error));
      this.dsch = new Dailyschedule();
    }
}
