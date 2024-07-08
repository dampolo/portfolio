import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SingleSkillComponent } from './single-skill/single-skill.component';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, SingleSkillComponent],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  
  skillsArray = [
    {
        name: 'Angular',
        img: 'angular'
    },
    {
        name: 'TypeScript',
        img: 'typescript'
    },
    {
        name: 'JavaScript',
        img: 'javascript'
    },
    {
        name: 'HTML',
        img: 'html'
    },
    {
        name: 'Scrum',
        img: 'scrum'
    },
    {
        name: 'Firebase',
        img: 'firebase'
    },
    {
        name: 'GIT',
        img: 'git'
    },
    {
        name: 'CSS',
        img: 'css'
    },
    {
        name: 'Rest-Api',
        img: 'api'
    },
    {
        name: 'Material Design',
        img: 'material_design'
    }
];
}
