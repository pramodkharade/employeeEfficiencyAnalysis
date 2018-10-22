import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
