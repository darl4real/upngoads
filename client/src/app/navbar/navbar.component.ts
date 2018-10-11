import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    //public authService: AuthService,
    private router: Router,
    //private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onLogoutClick() {
    //this.authService.logout();
    //this.flashMessage.show('You are now logged out', {cssClass: 'alert-success', timeout: 2000});
    this.router.navigate(['/login']);
    return false;
  }
}
