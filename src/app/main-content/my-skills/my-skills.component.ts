import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SingleSkillComponent } from './single-skill/single-skill.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, SingleSkillComponent, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  
    skillsArray = [
        {
            name: 'SKILLS.ANGULAR',
            img: 'angular'
        },
        {
            name: 'SKILLS.TYPESCRIPT',
            img: 'typescript'
        },
        {
            name: 'SKILLS.JAVASCRIPT',
            img: 'javascript'
        },
        {
            name: 'SKILLS.HTML',
            img: 'html'
        },
        {
            name: 'SKILLS.SCRUM',
            img: 'scrum'
        },
        {
            name: 'SKILLS.FIREBASE',
            img: 'firebase'
        },
        {
            name: 'SKILLS.GIT',
            img: 'git'
        },
        {
            name: 'SKILLS.CSS',
            img: 'css'
        },
        {
            name: 'SKILLS.REST_API',
            img: 'rest-api'
        },
        {
            name: 'SKILLS.MATERIAL_DESIGN',
            img: 'material-design'
        }
    ];
    
}
