import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Faculty } from '../modules/faculty.module';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor(private http:HttpClient) { }
  private str='';
  private baseUrl='http://localhost:7077';

  
  getAllFaculty():Observable<Faculty>
  {
    return this.http.get<Faculty>(this.baseUrl+'/faculty/');
  }

  getFaculty(id:number):Observable<Faculty>
  {
    return this.http.get<Faculty>(this.baseUrl+'/faculty/'+id);
  }
  
  createFaculty(faculty:Object):Observable<Object>
  {
    this.str=JSON.stringify(faculty);
    var obj=JSON.parse(this.str);
    console.log(obj);
    return this.http.post(this.baseUrl+'/faculty/',obj);
  }
  deleteFaculty(id:number)
  {
    return this.http.delete(this.baseUrl+'/faculty/'+id);
  }

  updateFaculty(updt:Object):Observable<Object>
  {
    var str=JSON.stringify(updt);
    var obj=JSON.parse(str);
    console.log(str);
    return this.http.put(this.baseUrl+'/faculty/',obj);
  }


}
