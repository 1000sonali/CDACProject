
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subjects } from '../modules/subject.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';


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
  
  createSubject(subj: Object){
    var str=JSON.stringify(subj);
    var obj=JSON.parse(str);
    console.log(str);
      return this.http.post(this.baseUrl+'/subject/', obj);
  }

  deleteSubject(id:number)
  {
    return this.http.delete(this.baseUrl+'/subject/'+id);
  }

  updateSubject(subj:Object):Observable<Object>
  {
    var str=JSON.stringify(subj);
    var obj=JSON.parse(str);
    console.log(str);
    return this.http.put(this.baseUrl+'/subject/',obj);
  }
}
