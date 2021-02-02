import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../modules/userlogin.module';

@Injectable({
  providedIn: 'root'
})
export class LoginAndRegisterControlService {

  constructor(private http:HttpClient) { }

  private baseUrl='http://localhost:7077';

  getUser(id:number):Observable<Users>
  {
    return this.http.get<Users>(this.baseUrl+'/user/'+id)
  }

  sendmail()
  {
    var str="sonali";
    var str1=JSON.stringify(str);
    var obj=JSON.parse(str1);
    console.log(obj);
    console.log("in send mail check");
    return this.http.get(this.baseUrl+'/course/');
  }
}
