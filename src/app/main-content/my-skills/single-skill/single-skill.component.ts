import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-single-skill',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './single-skill.component.html',
  styleUrl: './single-skill.component.scss'
})
export class SingleSkillComponent {
  @Input() skill = {
    name: 'Angular',
    img: 'assets/img/angular.png'
  }
}
