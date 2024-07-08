import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-skill.component.html',
  styleUrl: './single-skill.component.scss'
})
export class SingleSkillComponent {
  @Input() skill = {
    name: 'Angular',
    img: 'assets/img/angular.png'
  }
}
