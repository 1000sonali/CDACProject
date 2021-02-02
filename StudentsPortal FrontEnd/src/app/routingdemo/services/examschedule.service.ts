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
  
  createExam(exam:Exam){
    return this.http.post(this.baseUrl+'/exam/', exam);
  }

  deleteExamination(id:number)
  {
    return this.http.delete(this.baseUrl+'/exam/'+id);
  }

  updateExam(exam:Exam)
  {
    return this.http.put(this.baseUrl+'/exam/',exam);
  }

}
