import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Classroom } from '../modules/classroom.module';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

 
  constructor(private http:HttpClient) { }

  private baseUrl = 'http://localhost:7077';

  getAllClassroom():Observable<Classroom>
  {
    return this.http.get<Classroom>(this.baseUrl+'/classroom/');
  }

  deleteClassRoom(id:number)
  {
    return this.http.delete(this.baseUrl+'/classroom/'+id);
  }

  updateClassRoom(updtnts:Object):Observable<Object>
  {
    var str=JSON.stringify(updtnts);
    var obj=JSON.parse(str);
    console.log(str);
    return this.http.put(this.baseUrl+'/classroom/',obj);
  }

  getClassRoom(id:number):Observable<Classroom>
  {
    return this.http.get<Classroom>(this.baseUrl+'/classroom/'+id);
  }
  
  createClassRoom(nts: Classroom){
    var str=JSON.stringify(nts);
    var obj=JSON.parse(str);
    console.log(str);
      return this.http.post(this.baseUrl+'/classroom/', nts);
  }
}
