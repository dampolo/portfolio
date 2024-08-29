import { Routes} from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SentMessageComponent } from './sent-message/sent-message.component';
import { InProgressComponent } from './in-progress/in-progress.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'imprint', component: ImprintComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'sent-message-confirmation', component: SentMessageComponent },
    { path: 'in-progress-component', component: InProgressComponent },
];