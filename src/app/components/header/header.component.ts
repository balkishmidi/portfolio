import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
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
