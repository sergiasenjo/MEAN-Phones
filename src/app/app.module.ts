import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { PhoneListComponent } from './phone-list/phone-list.component';

import { DataService } from './services/data.service';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
