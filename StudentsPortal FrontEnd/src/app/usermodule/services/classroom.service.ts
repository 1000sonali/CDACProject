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

	getClassRoom(id:number):Observable<Classroom>
  {
    return this.http.get<Classroom>(this.baseUrl+'/classroom/'+id);
  }
}
