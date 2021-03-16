import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RTOAppComponent } from './core/rto-app.component';
import { WelcomeComponent } from './home/welcome.component';
import { NavBarComponent } from './navbar/navbar.component';
import { SeatLocationComponent } from './seatmanagement/seatmanagement.component';


@NgModule({
  declarations: [
    RTOAppComponent,
    WelcomeComponent,
    SeatLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [RTOAppComponent]
})
export class AppModule { }
