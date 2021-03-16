import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RTOAppComponent } from './core/rto-app.component';
import { WelcomeComponent } from './home/welcome.component';
import { SeatLocationComponent } from './seatmanagement/seatmanagement.component';

const appRoutes: Routes = [
  {path: 'home', component: RTOAppComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'seatmanagement', component: SeatLocationComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
