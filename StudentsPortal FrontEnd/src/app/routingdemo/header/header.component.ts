import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/loginauth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isButtonVisible = false;
  public isButton=true;
  constructor(private authsvc:AuthService) { }

  ngOnInit(): void {
  }


  logout()
  {
     this.authsvc.logout();
     this.isButton=true;
        this.isButtonVisible=false;
  }
 
}
