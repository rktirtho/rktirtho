import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor() { 
    this.navbarCollapse();
  }

  ngOnInit(): void {
  }
  navbarCollapse () {
    $("#mainNav").addClass("navbar-shrink");
  };
}
