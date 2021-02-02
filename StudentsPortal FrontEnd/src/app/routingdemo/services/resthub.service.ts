import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Courses } from '../modules/course.module';

@Injectable({
  providedIn: 'root'
})
export class ResthubService {

  constructor(private http:HttpClient) { }

  private baseUrl = 'http://localhost:7077';

  getAllCourses():Observable<Courses>
  {
    return this.http.get<Courses>(this.baseUrl+'/course/');
  }
  
  getCourse(id:number):Observable<Courses>
  {
    return this.http.get<Courses>(this.baseUrl+'/course/'+id);
  }
  
  createCourse(course: Object) {
    return this.http.post(this.baseUrl+'/course/', course);
  }

  deleteCourse(id:number)
  {
    return this.http.delete(this.baseUrl+'/course/'+id);
  }

  updateCourse(course:Object)
  {
    return this.http.put(this.baseUrl+'/course/',course);
  }

  sendMail(str: string) {
    console.log("in service send mail...");
    return this.http.get(this.baseUrl+'/course/sendmail/'+str);
  }

}