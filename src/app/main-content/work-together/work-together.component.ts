import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-work-together',
    imports: [TranslateModule],
    templateUrl: './work-together.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './work-together.component.scss'
})
export class WorkTogetherComponent {

}
