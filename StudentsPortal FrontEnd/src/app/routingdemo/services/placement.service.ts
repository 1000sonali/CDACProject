import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Placement } from '../modules/placement.module';

@Injectable({
  providedIn: 'root'
})
export class PlacementService {

  constructor(private http:HttpClient) { }

  private baseUrl = 'http://localhost:7077';

  getAllPlaced():Observable<Placement>
  {
    return this.http.get<Placement>(this.baseUrl+'/placement/');
  }
  
  getPlaced(id:string):Observable<Placement>
  {
    return this.http.get<Placement>(this.baseUrl+'/placement/'+id);
  }
  
  createRecord(course: Object): Observable<Object> 
  {
    return this.http.post(this.baseUrl+'/placement/', course);
  }

  deleteRecord(id:string)
  {
    return this.http.delete(this.baseUrl+'/placement/'+id);
  }

  updateRecord(course:Object):Observable<Object>
  {
    return this.http.put(this.baseUrl+'/placement/',course);
  }
}
