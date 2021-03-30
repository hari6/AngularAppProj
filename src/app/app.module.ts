import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';


import { AppRoutingModule } from './app-routing.module';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SeatManagementComponent } from './seatmanagement/seatmanagement.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MapPageComponent } from './map-page/map-page.component';
import { MatMenuModule } from '@angular/material/menu';
import { LocationDetailsService } from './location-details.service';
import { DirectivesComponent } from './directives/directives.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    HomeComponent,
    SeatManagementComponent,
    MapPageComponent,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    // MatOptionModule,
    MatSelectModule,
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule,
    MatGridListModule,
    MatMenuModule
  ],
  providers: [LocationDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
