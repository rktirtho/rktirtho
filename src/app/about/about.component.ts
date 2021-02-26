import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  // To Do
  // about information will come from database

  constructor() { 
    this.navbarCollapse();
  }

  ngOnInit(): void {
  }
  navbarCollapse () {
    $("#mainNav").addClass("navbar-shrink");
  };

}
