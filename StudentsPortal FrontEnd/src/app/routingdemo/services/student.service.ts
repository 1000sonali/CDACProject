import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../modules/student.module';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }
  baseUrl='http://localhost:7077';
  str:any;


  getAllStudents():Observable<Student>
  {
    return this.http.get<Student>(this.baseUrl+'/student/');
  }

  getStudent(id:number):Observable<Student>
  {
    return this.http.get<Student>(this.baseUrl+'/student/'+id);
  }
  
  createStudent(student:Object):Observable<Object>
  {
    this.str=JSON.stringify(student);
    var obj=JSON.parse(this.str);
    console.log(obj);
    return this.http.post(this.baseUrl+'/student/',obj);
  }

  deleteStudent(id:number)
  {
    return this.http.delete(this.baseUrl+'/student/'+id);
  }

  updateStudent(updt:Object):Observable<Object>
  {
    var str=JSON.stringify(updt);
    var obj=JSON.parse(str);
    console.log(str);
    return this.http.put(this.baseUrl+'/student/',obj);
  }

}
