import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assignment } from '../modules/assignment.module';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  constructor(private http:HttpClient) { }

  private baseUrl = 'http://localhost:7077';

  getAllAssignment():Observable<Assignment>
  {
    return this.http.get<Assignment>(this.baseUrl+'/assignment/');
  }
  
	getAssignment(id:number):Observable<Assignment>
  {
    return this.http.get<Assignment>(this.baseUrl+'/assignment/'+id);
  }
}
