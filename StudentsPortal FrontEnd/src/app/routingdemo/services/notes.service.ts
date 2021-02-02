import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notes } from '../modules/notes.module';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http:HttpClient) { }

  private baseUrl = 'http://localhost:7077';

  getAllNotes():Observable<Notes>
  {
    return this.http.get<Notes>(this.baseUrl+'/notes/');
  }

  deleteNotes(id:number)
  {
    return this.http.delete(this.baseUrl+'/notes/'+id);
  }

  updateNotes(updtnts:Object):Observable<Object>
  {
    var str=JSON.stringify(updtnts);
    var obj=JSON.parse(str);
    console.log(str);
    return this.http.put(this.baseUrl+'/notes/',obj);
  }

  getNotes(id:number):Observable<Notes>
  {
    return this.http.get<Notes>(this.baseUrl+'/notes/'+id);
  }
  
  createNotes(nts: Notes){
    var str=JSON.stringify(nts);
    var obj=JSON.parse(str);
    console.log(str);
      return this.http.post(this.baseUrl+'/notes/', nts);
  }
}
