import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AuthService } from '../authentic/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit() {
  }
  logOut(){
    this.authService.userLogout();
  }
  openNav(){
    $('#mySidebar').css('width',250);
    $('#main').css('margin-left',250);
    $('#main').hide();
  }
  closeNav(){
    $('#mySidebar').css('width',0);
    $('#main').css('margin-left',0);
    $('#main').show();
  }
}
