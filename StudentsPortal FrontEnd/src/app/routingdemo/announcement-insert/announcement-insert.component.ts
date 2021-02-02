import { Component, OnInit } from '@angular/core';
import { Announcement } from '../modules/announcement.mosule';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-announcement-insert',
  templateUrl: './announcement-insert.component.html',
  styleUrls: ['./announcement-insert.component.css']
})
export class AnnouncementInsertComponent implements OnInit {
  constructor(private svc:AnnouncementService) { }
  ans: Announcement = new Announcement();
  announce:[];
  submitted

  ngOnInit(): void {
    this.getAllAnnouncement()
  }
  
  insertAnnouncement() {
    this.svc.createAnnouncement(this.ans)
      .subscribe(data => console.log(data), error => console.log(error));
    this.ans = new Announcement();
    console.log("Announcement Inserted Successfully....");
    this.getAllAnnouncement();
  }

  getAllAnnouncement()
  {
    this.svc.getAllAnnouncement().subscribe((response: { [x: string]: any; })=>
    {
      console.log(response)
      if(response['status']=='success')
      {
        this.announce=response['data']
        console.log(this.announce)
      }
      else
      {
        console.log(response['error'])
      }
    });

  }
 
  deleteAnnouncement(id:number)
  {
    if(confirm("Are you sure to delete Announcement"))
    {
      this.svc.deleteAnnouncement(id).subscribe(
        data => {
          console.log(data);
         this.getAllAnnouncement();
        },
        error => console.log(error));
      }
  }

}
