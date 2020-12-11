import * as $ from 'jquery';


export class Design{
    navbarCollapse () {
        $("#mainNav").addClass("navbar-shrink");
      };
    navbarfloat () {
        $("#mainNav").removeClass("navbar-shrink");
      };
}