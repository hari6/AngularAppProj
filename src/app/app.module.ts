import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NavBarComponent } from './navbar/navbar.component';
import { SeatManagementComponent } from './seatmanagement/seatmanagement.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    HomeComponent,
    SeatManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
