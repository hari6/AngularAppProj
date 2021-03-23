import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    templateUrl: './seatmanagement.component.html',
  styleUrls: ['./seatmanagement.component.css']

})

export class SeatManagementComponent {
    pageTitle = 'Seat Management';
    disableSelect = new FormControl(false);
    constructor(private route: Router) {  }

    ngOnInit(){
  
    }
  
    clickEvent() {
        this.route.navigate(['floormappage']);
    }
}