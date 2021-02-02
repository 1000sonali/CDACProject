import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminFaculty } from '../modules/adminfaculty.module';
import { AdminStudent } from '../modules/adminstudent.module';
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
  
  createAdminStudent(stud:AdminStudent)
  {
    return this.http.post(this.baseUrl+"/adminstudent",stud);
  }

  createAdminFaculty(faculty:AdminFaculty)
  {
    return this.http.post(this.baseUrl+"/adminfaculty",faculty);
  }
 
  updateAdminFaculty(faculty:AdminFaculty)
  {
    return this.http.put(this.baseUrl+"/adminfaculty",faculty);
  }


  updateAdminStudent(stud:AdminStudent)
  {
    return this.http.put(this.baseUrl+"/adminstudent",stud);
  }


  deleteAdminFaculty(id:number)
  {
    return this.http.delete(this.baseUrl+"/adminfaculty/"+id);
  }


  deleteAdminStudent(id:number)
  {
    return this.http.delete(this.baseUrl+"/adminstudent/"+id);
  }
  
}
