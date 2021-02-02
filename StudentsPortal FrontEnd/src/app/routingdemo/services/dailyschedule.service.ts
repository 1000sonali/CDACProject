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

  deleteSchedule(id:number)
  {
    return this.http.delete(this.baseUrl+'/schedule/'+id);
  }

  updateSchedule(updtsch:Object):Observable<Object>
  {
    var str=JSON.stringify(updtsch);
    var obj=JSON.parse(str);
    console.log(str);
    return this.http.put(this.baseUrl+'/schedule/',obj);
  }

  getDailySchedule(id:number):Observable<Dailyschedule>
  {
    return this.http.get<Dailyschedule>(this.baseUrl+'/schedule/'+id);
  }
  
  createDailySchedule(dsch: Dailyschedule):Observable<any>{
    var str=JSON.stringify(dsch);
    var obj=JSON.parse(str);
    console.log(str);
      return this.http.post<any>(this.baseUrl+'/schedule/', dsch);
  }

}
