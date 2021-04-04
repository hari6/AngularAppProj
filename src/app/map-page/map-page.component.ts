import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common"

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent implements OnInit {
  public pageTitle = 'Floor Map Page';
  constructor(private route: Router,
    private location: Location) {  }

    ngOnInit(){
  
    }
    goBack(){
      this.location.back();
  }
  

}
