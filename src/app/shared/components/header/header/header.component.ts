import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, FormsModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMenuOpen = false
  posFixBurger = false;
  posFixLogo = false;
  setBorder = false;
  selectedLanguage: string = 'en';
  
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
    { name: 'MENU.ABOUT_ME', path: '#about-me' },
    { name: 'MENU.SKILL_SET', path: '#skill-set' },
    { name: 'MENU.MY_WORK', path: '#my-work' },
    { name: 'MENU.CONTACT', path: '#contact' }
  ];

  changeLanguage(language: string) {
    this.selectedLanguage = language;
    this.translate.use(language);
  }
}
