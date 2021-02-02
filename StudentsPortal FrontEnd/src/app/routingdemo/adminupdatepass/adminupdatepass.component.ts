import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../modules/userlogin.module';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-adminupdatepass',
  templateUrl: './adminupdatepass.component.html',
  styleUrls: ['./adminupdatepass.component.css']
})
export class AdminupdatepassComponent implements OnInit {

  user:Users;
str:string;
id:number;
  constructor(private svc:UsersService, private route:Router) { }


  ngOnInit(): void {
  this.user=new Users();

  this.str=sessionStorage.getItem('userid');
     this.id=parseInt(this.str);
     console.log(this.str);
      console.log(this.id);

  this.svc.getUser(this.id).subscribe((response: { [x: string]: any; })=>
  {
   
    if(response['status']=='success')
    {
      
      this.user=response['data'];
      console.log(this.user);
    }
    else
    {
      console.log(response['error'])
    }
  });

  }

  updateUser()
  {
    this.user.role="admin";

    this.svc.updateUser(this.user).subscribe((response: { [x: string]: any; })=>
    {
     
      if(response['status']=='success')
      {
        
      
        this.route.navigate(['home']);
      }
      else
      {
        console.log(response['error']);
      }
    });
  }

}
