import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dailyschedule } from '../modules/dailyschedule.module';

@Injectable({
  providedIn: 'root'
})
export class DailyscheduleService {

  constructor(private http:HttpClient) { }

  private baseUrl = 'http://localhost:7077';

  getAllSchedules():Observable<Dailyschedule>
  {
    return this.http.get<Dailyschedule>(this.baseUrl+'/schedule/');
  }

  getDailySchedule(id:number):Observable<Dailyschedule>
  {
    return this.http.get<Dailyschedule>(this.baseUrl+'/schedule/'+id);
  }
}
