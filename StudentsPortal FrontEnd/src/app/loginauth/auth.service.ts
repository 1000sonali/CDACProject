import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private route:Router) { }

  isLoggedIn(): boolean {
    let status = false;      
   if (sessionStorage.getItem('userrole') == "admin") {      
      status = true;      
   }    
   else {      
      status = false;      
      }      
   return status;   
  }
  isLogged(): boolean {
    let status = false;      
   if (sessionStorage.getItem('userrole') == "student") {      
      status = true;      
   }    
   if (sessionStorage.getItem('userrole') == "faculty") {      
      status = true;      
   }    
         
   return status;   
  }

  logout() {    
    sessionStorage.setItem('userrole','null');    
    sessionStorage.removeItem('user');  
    this.route.navigate(['/login']);
    }  

}
