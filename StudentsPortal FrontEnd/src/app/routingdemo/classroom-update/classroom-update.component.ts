import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Classroom } from '../modules/classroom.module';
import { ClassroomService } from '../services/classroom.service';

@Component({
  selector: 'app-classroom-update',
  templateUrl: './classroom-update.component.html',
  styleUrls: ['./classroom-update.component.css']
})
export class ClassroomUpdateComponent implements OnInit {

  
  id:number;
  clsrm:Classroom;
  updtclsrm:Classroom;
  
  todayDate:any = new Date();
    constructor(private svc:ClassroomService, private route: ActivatedRoute,private routes:Router) { }
  
    ngOnInit() {
      this.clsrm = new Classroom();
      this.updtclsrm=new Classroom();
      this.id = this.route.snapshot.params['classid'];
      console.log(this.id);
      this.svc.getClassRoom(this.id)
      .subscribe((response: { [x: string]: any; })=>
      {
        console.log(response)
        if(response['status']=='success')
        {
          this.clsrm=response['data'];
         
          this.updtclsrm.classid=this.clsrm.classid;
          this.updtclsrm.classRoomId=this.clsrm.classRoomId;
          this.updtclsrm.classRoomPwd=this.clsrm.classRoomPwd;
          //this.updtclsrm.crsClassRoom=this.clsrm.crsClassRoom;
          console.log(this.updtclsrm);
         
        }
        else
        {
          console.log(response['error'])
        }
      });
    }
  
  
    updateClassRoom()
    {  
      this.updtclsrm.classid=this.clsrm.classid;
      this.updtclsrm.classRoomId=this.clsrm.classRoomId;
      this.updtclsrm.classRoomPwd=this.clsrm.classRoomPwd;
     // this.updtclsrm.crsClassRoom=this.clsrm.crsClassRoom;
      console.log(this.updtclsrm);
  
      this.svc.updateClassRoom(this.updtclsrm)
      .subscribe(data => this.routes.navigate(['/classroom']),
       error => console.log(error));
      this.clsrm = new Classroom();
    }

}
