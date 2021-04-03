import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common"

@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class HomeComponent {
  public pageTitle = 'Welcome';

  constructor(private route: Router,
    private location: Location) {  }

    ngOnInit(){
  
    }

    goBack(){
      this.location.back();
  }
  
}
