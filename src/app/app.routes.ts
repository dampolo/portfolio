import { Routes, PreloadAllModules, RouterModule, Router } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint.component';

import { HeaderComponent } from './shared/components/header/header/header.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SentMessageComponent } from './sent-message/sent-message.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'imprint', component: ImprintComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'sent-message-confirmation', component: SentMessageComponent },

    { path: 'aside-main-nav', loadComponent: () => import('.//shared/components/header/header/header.component').then(m => m.HeaderComponent) }
];