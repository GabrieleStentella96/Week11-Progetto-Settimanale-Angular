import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    //this.isLoggedIn();
  }

  logout() {
    this.authService.logout();
  }

  // isLoggedIn() {
  //   if (JSON.parse(localStorage.getItem('isAuthenticated')!).auth_token == null) {
  //     this.isLoggedin = false;
  //     return this.isLoggedin;
  //   }
  //   else {
  //     return true;
  //   }
  // }

}
