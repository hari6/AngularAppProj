import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'rto-app-root',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent{
  // title = 'WELLS FARGO';

  objects = [
    {titlename: "Home", routePath:'/welcome', imageUrl: 'assets/images/home.png'},
    {titlename: "Seat Management", routePath: '/seatmanagement', imageUrl: 'assets/images/seats.png'},
    {titlename: "Placeholder 1", routePath:'/placeholder1', imageUrl: ''},
    {titlename: "Placeholder 2", routePath: '/placeholder2', imageUrl: ''}

  ];
 
constructor(private route: Router) {  }

  ngOnInit(){

  }


  // navigateTo(value) {
  //   if (value && (value.titlename === 'Home' || value.titlename === 'Seat Manamgement')) {
  //     this.route.navigate([value.routePath]);

  //   } else {
  //     this.route.navigate(['/home']);
  //   }
  // }

  clickEvent(value) {
    if (value && (value.titlename === 'Home' || value.titlename === 'Seat Management')){
      this.route.navigate([value.routePath]);
    }   else {
      this.route.navigate(['welcome']);
  } 
  }
  myFunction(x) {
    x.classList.toggle("change");
  }
}
