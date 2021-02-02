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
}
