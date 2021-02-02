import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Announcement } from '../modules/announcement.mosule';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor(private http:HttpClient) { }

  private baseUrl = 'http://localhost:7077';

  getAllAnnouncement():Observable<Announcement>
  {
    return this.http.get<Announcement>(this.baseUrl+'/ansment/');
  }

  getAnnouncement(id:number):Observable<Announcement>
  {
    return this.http.get<Announcement>(this.baseUrl+'/ansment/'+id);
  }
  
  createAnnouncement(ans:Announcement){
    return this.http.post(this.baseUrl+'/ansment/', ans);
  }

  deleteAnnouncement(id:number)
  {
    return this.http.delete(this.baseUrl+'/ansment/'+id);
  }
}
