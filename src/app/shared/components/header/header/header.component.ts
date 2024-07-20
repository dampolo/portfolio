import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMenuOpen = false
  posFixBurger = false;
  posFixLogo = false;
  setBorder = false;
  
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

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

  changeLanguage(language: string) {
    this.translate.use(language);
    this.setBorder = !this.setBorder;
  }
}
