import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SingleProject } from '../../../models/singleProject.model';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss',
})
export class SingleProjectComponent {
  @Input() index: number = 0;
  @Input() project!: SingleProject;

}
