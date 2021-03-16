import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { HomeComponent } from './home/welcome.component';
import { SeatManagementComponent } from './seatmanagement/seatmanagement.component';

const appRoutes: Routes = [
  {path: 'home', component: LandingpageComponent},
  {path: 'welcome', component: HomeComponent},
  {path: 'seatmanagement', component: SeatManagementComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
