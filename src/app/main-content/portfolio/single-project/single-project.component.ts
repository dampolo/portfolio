import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss',
})
export class SingleProjectComponent {
  @Input() index: number = 0;
  @Input() project = {
    id: 0,
    image: "assets/img/join.png",
    project_name: 'Join',
    language: 'Java Script | HTML | CSS',
    description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    test: 'Live test',
    test_link: 'https://github.com/dampolo/ElPolloLoco',
    git_hub: 'GitHub',
    link_git_hub: 'https://github.com/dampolo/ElPolloLoco'
  };
}
