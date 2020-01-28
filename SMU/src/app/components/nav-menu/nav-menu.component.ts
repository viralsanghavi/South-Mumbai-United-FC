import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})


export class NavMenuComponent implements OnInit {

  constructor() { }
  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e) {
      let element = document.querySelector('.navbar');
      if (window.pageYOffset > element.clientHeight) {
        element.classList.add('navbar-inverse');
      } else{
        element.classList.remove('navbar-inverse');
      }
    }
  
  ngOnInit() {
  }

  Toggle() {
    var mobileNav = document.getElementById("mobile-nav");
    var menuBars = document.getElementById("menu-bars");
    mobileNav.classList.toggle("nav-expand");
    menuBars.classList.toggle("change");
  }

  SidebarOn() {
    var nav = document.getElementById("desktop-nav");
    var toggle = document.getElementById("sidebar-toggle");
    nav.classList.remove("display-none");
    toggle.classList.add("display-none");
  }

  SidebarOff() {
    var nav = document.getElementById("desktop-nav");
    var toggle = document.getElementById("sidebar-toggle");
    nav.classList.add("display-none");
    toggle.classList.remove("display-none");
  }

  shrinkNavbar = false;
  onScroll(event: any): void {
    // Shrink the header top and bottom padding when scrolling beyond 300px
    this.shrinkNavbar =
      (window.pageYOffset || document.documentElement.scrollTop) > 300;
  }
}

