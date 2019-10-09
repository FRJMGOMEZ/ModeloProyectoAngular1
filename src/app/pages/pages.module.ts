import { SharedModule } from '../shared/shared.module';
import { PAGESROUTES } from './pages.routes';
import { NgModule } from '@angular/core';
import { ModalsModule } from '../modals/modals.module';
import { PipesModule } from '../pipes/pipes.module';
import { ProvidersModule } from '../providers/providers.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    declarations: [
        DashboardComponent],
    imports: [
        PAGESROUTES,
        SharedModule,
        ModalsModule,
        PipesModule,
        ProvidersModule
    ],
    exports: [],
    bootstrap: []
})
export class PagesModule { }