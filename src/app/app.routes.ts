import { Routes, PreloadAllModules, RouterModule, Router } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint.component';

import { HeaderComponent } from './shared/components/header/header/header.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'imprint', component: ImprintComponent },
    { path: 'aside-main-nav', loadComponent: () => import('.//shared/components/header/header/header.component').then(m => m.HeaderComponent) }
];