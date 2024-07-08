import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkTogetherComponent } from './work-together/work-together.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AboutMeComponent } from './about-me/about-me.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, AboutMeComponent, WorkTogetherComponent, MySkillsComponent, PortfolioComponent, ContactComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
