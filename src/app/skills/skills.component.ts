import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() {
    this.navbarCollapse();
   }

  ngOnInit(): void {
  }
  navbarCollapse () {
    $("#mainNav").addClass("navbar-shrink");
  };
}
