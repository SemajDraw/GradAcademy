import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';

export const appRoutes: Routes = [
  {
    path: 'full-results',
    loadChildren:
      () => import('./full-results/full-results.module')
        .then(m => m.FullResultsModule)
  },
  {
    path: 'by-party',
    loadChildren:
      () => import('./party-results/party-results.module')
        .then(m => m.PartyResultsModule)
  },
  {
    path: 'by-constituency',
    loadChildren:
      () => import('./constituency-results/constituency-results.module')
        .then(m => m.ConstituencyResultsModule)
  },
  {path: '**', component: HomeComponent},
];
