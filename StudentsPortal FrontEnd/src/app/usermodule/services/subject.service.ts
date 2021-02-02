import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subjects } from '../modules/subject.module';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http:HttpClient) { }

  private baseUrl = 'http://localhost:7077';

  getAllSubjects():Observable<Subjects>
  {
    return this.http.get<Subjects>(this.baseUrl+'/subject/');
  }
  
  getSubject(id:number):Observable<Subjects>
  {
    return this.http.get<Subjects>(this.baseUrl+'/subject/'+id);
  }
}
