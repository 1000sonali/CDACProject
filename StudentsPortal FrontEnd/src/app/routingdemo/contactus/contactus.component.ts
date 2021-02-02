import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Announcement } from '../modules/announcement.mosule';
import { AnnouncementService } from '../services/announcement.service';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  ans :Announcement
  announc:Announcement[];
 constructor(private svc:AnnouncementService, private router: Router) { }


  ngOnInit(): void {
    this.getAllAnnouncement();
   
  }


  getAllAnnouncement()
  {
    this.svc.getAllAnnouncement().subscribe((response: { [x: string]: any; })=>
      {
        console.log(response)
        if(response['status']=='success')
        {
          this.announc=response['data']
          console.log(this.announc)
        }
 
        else
        {
          console.log(response['error'])
        }
      });
  }

showMessages() {
   var str:string;
   var i:number;
   for(i=0;i<this.announc.length;i++)
   {
     str=str.concat(this.announc[i].ansmName);
     str=str.concat("<br>");
     document.getElementById("print").innerHTML=str;
   }

}

}
