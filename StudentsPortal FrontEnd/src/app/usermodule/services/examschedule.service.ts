import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exam } from '../modules/examschedule.module';

@Injectable({
  providedIn: 'root'
})
export class ExamscheduleService {

  constructor(private http:HttpClient) { }

  private baseUrl = 'http://localhost:7077';

  getAllExams():Observable<Exam>
  {
    return this.http.get<Exam>(this.baseUrl+'/exam/');
  }

  getExam(id:number):Observable<Exam>
  {
    return this.http.get<Exam>(this.baseUrl+'/exam/'+id);
  }
  
}
