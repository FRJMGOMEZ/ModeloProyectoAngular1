import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { APPROUTES } from './app.routes';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    APPROUTES,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
