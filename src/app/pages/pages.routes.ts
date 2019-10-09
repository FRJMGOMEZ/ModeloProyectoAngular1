import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const pagesRoutes: Routes = [


    { path: "", redirectTo: "/dashboard", pathMatch: "full" },

    {
        path: "dashboard",
        component: DashboardComponent
    },
   
];

export const PAGESROUTES = RouterModule.forChild(pagesRoutes);