import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() {
    this.navbarCollapse();
   }

  ngOnInit(): void {
  }
  navbarCollapse () {
    $("#mainNav").addClass("navbar-shrink");
  };
}
