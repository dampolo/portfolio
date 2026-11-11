import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-imprint',
    imports: [TranslateModule],
    templateUrl: './imprint.component.html',
    styleUrl: './imprint.component.scss',
    changeDetection: ChangeDetectionStrategy.Eager,
    encapsulation: ViewEncapsulation.None
})
export class ImprintComponent {

}
