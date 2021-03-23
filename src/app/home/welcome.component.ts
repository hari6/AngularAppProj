import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class HomeComponent {
  public pageTitle = 'Welcome';

  constructor(private route: Router) {  }

    ngOnInit(){
  
    }
  
}
