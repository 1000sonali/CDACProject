import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../modules/userlogin.module';

@Injectable({
  providedIn: 'root'
})
export class LoginAndRegisterControlService {

  constructor(private http:HttpClient) { }

  private baseUrl='http://localhost:7077';

  getUser(id:number)
  {
    return this.http.get<Users>(this.baseUrl+'/user/'+id)
  }
}
