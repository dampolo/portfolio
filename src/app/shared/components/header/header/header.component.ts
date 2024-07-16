import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMenuOpen = false
  posFixBurger = false;
  posFixLogo = false;
    

  openMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.posFixBurger = !this.posFixBurger;
    this.posFixLogo = !this.posFixLogo;

  }

  closeMenu() {
    this.isMenuOpen = false;
    this.posFixBurger = false;
    this.posFixLogo = false;
  }

  menu = [
    {
      name: 'About me',
      path: '#about-me',
    },
    {
      name: 'Skill set',
      path: '#skill-set',
    },
    {
      name: 'My work',
      path: '#my-work',
    },
    {
      name: 'Contact',
      path: '#contact',
    },
  ];
}
