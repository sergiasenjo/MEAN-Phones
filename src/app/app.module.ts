import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { PhoneListComponent } from './phone-list/phone-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
