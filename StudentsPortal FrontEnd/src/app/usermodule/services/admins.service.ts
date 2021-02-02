import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Faculty } from '../modules/faculty.module';
import { Student } from '../modules/student.module';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  constructor(private http:HttpClient) { }
  private baseUrl='http://localhost:7077';

  getStudent(id:number):Observable<Student>
  {
    return this.http.get<Student>(this.baseUrl+'/adminstudent/'+id);
  }

  getFaculty(id:number):Observable<Faculty>
  {
    return this.http.get<Faculty>(this.baseUrl+'/adminfaculty/'+id);
  }

  getStudents():Observable<Student>
  {
    return this.http.get<Student>(this.baseUrl+'/adminstudent/');
  }

  getFacultys():Observable<Faculty>
  {
    return this.http.get<Faculty>(this.baseUrl+'/adminfaculty/');
  }
  
}
