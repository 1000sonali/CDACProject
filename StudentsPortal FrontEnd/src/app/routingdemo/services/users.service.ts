import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../modules/userlogin.module';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  private baseUrl = 'http://localhost:7077';

  getAllUsers():Observable<Users>
  {
    return this.http.get<Users>(this.baseUrl+'/user/');
  }
  
  getUser(id:number):Observable<Users>
  {
    return this.http.get<Users>(this.baseUrl+'/user/'+id);
  }
  
  createUser(usr: Users) {
    return this.http.post(this.baseUrl+'/user/', usr);
  }

  deleteUser(id:string)
  {
    return this.http.delete(this.baseUrl+'/user/'+id);
  }

  updateUser(usr:Object)
  {
    return this.http.put(this.baseUrl+'/user/',usr);
  }

 
  sendmail(str:string, idd:number):Observable<Object>{
  console.log("calling rest api");
  console.log(this.baseUrl+"/emailuser/"+idd);
 
  return this.http.post(this.baseUrl+"/emailuser/"+idd, str);
  }
}














