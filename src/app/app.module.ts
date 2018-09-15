import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgOrganizationChartModule } from './../ng-organization-chart-px/ng-organization-chart.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgOrganizationChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
