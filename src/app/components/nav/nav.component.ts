import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private renderer: Renderer2) {}

  toggleMenu(): void {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    // Toggle 'active' class on the menu and nav
    if (menuToggle && nav) {
      if (menuToggle.classList.contains('active')) {
        this.renderer.removeClass(menuToggle, 'active');
        this.renderer.removeClass(nav, 'active');
      } else {
        this.renderer.addClass(menuToggle, 'active');
        this.renderer.addClass(nav, 'active');
      }
    }
  }
}
