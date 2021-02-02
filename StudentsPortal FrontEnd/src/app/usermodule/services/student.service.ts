import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }
  baseUrl='http://localhost:7077';
  str:any;

  createStudent(student:Object):Observable<Object>
  {
    this.str=JSON.stringify(student);
    var obj=JSON.parse(this.str);
    console.log(obj);
    return this.http.post(this.baseUrl+'/student/',obj);
  }

  
}
