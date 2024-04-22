import { Route } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { AboutComponent } from './routes/about/about.component';

export const appRoutes: Route[] = [
  {
    path: 'cookie',
    loadChildren: () => import('cookie/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'ssr',
    loadChildren: () => import('cookie-ssr/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];
