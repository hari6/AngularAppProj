import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'rto-app-root',
  templateUrl: './rto-app.component.html',
  styleUrls: ['./rto-app.component.css']
})
export class RTOAppComponent{
  title = 'WELLS FARGO';

  objects = [
    {titlename: "Home", routePath:'/welcome', imageUrl: 'assets/images/home.png'},
    {titlename: "Seat Management", routePath: '/seatmanagement', imageUrl: 'assets/images/seats.png'}

  ];
 
constructor(private route: Router) {  }

  ngOnInit(){

  }


  navigateTo(value) {
    if (value && (value.titlename === 'Home' || value.titlename === 'Seat Manamgement')) {
      this.route.navigate([value.routePath]);

    } else {
      this.route.navigate(['/home']);
    }
  }

  clickEvent() {
    this.route.navigate(['/welcome']);
  }
  myFunction(x) {
    x.classList.toggle("change");
  }
}
