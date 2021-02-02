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

  deleteAssignment(id:number)
  {
    return this.http.delete(this.baseUrl+'/assignment/'+id);
  }

  updateAssignment(updtasgn:Object):Observable<Object>
  {
    var str=JSON.stringify(updtasgn);
    var obj=JSON.parse(str);
    console.log(str);
    return this.http.put(this.baseUrl+'/assignment/',obj);
  }

  getAssignment(id:number):Observable<Assignment>
  {
    return this.http.get<Assignment>(this.baseUrl+'/assignment/'+id);
  }
  
  createAssignment(asn: Assignment){
    var str=JSON.stringify(asn);
    var obj=JSON.parse(str);
    console.log(str);
      return this.http.post(this.baseUrl+'/assignment/', asn);
  }
}
