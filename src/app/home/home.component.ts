import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { 
    this.navbarCollapse();
  }

  ngOnInit(): void {
  }

  navbarCollapse () {
    $("#mainNav").removeClass("navbar-shrink");
  };
}
