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

  getNotes(id:number):Observable<Notes>
  {
    return this.http.get<Notes>(this.baseUrl+'/notes/'+id);
  }
}
