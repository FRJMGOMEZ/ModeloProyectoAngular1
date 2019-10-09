import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PagesComponent } from './pages/pages.component';

const ROUTES: Routes = [
  {path:'',
  component:PagesComponent,
  loadChildren:'./pages/pages.module#PagesModule'
},
  { path: "**", component: PageNotFoundComponent }
];
export const APPROUTES = RouterModule.forRoot(ROUTES, {initialNavigation: 'enabled',paramsInheritanceStrategy: 'always',useHash: true});