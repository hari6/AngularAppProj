import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { Router } from '@angular/router';
import { LocationDetailsService } from '../location-details.service';
import { LocationPlace, Building, Floor, Country } from './location'
import { Location } from "@angular/common"


//   export interface Floor {
//     floorId: string;
//     // buildingId: string;
//   }

//   export interface Building {
//     buildingId: string;
//   }

//   export interface Brand {
//     value: string;
//     viewValue: string;
//   }

@Component({
    templateUrl: './seatmanagement.component.html',
  styleUrls: ['./seatmanagement.component.css'],
  providers: [LocationDetailsService]

})

export class SeatManagementComponent {
    pageTitle = 'Seat Management';
    disableSelect = new FormControl(false);
    toggle: boolean = true;
    // brands: Brand[] = [
    //     { value: 'Louis Vuitton', viewValue: 'Louis Vuitton' },
    //     { value: 'Gucci', viewValue: 'Gucci' },
    //     { value: 'Prada', viewValue: 'Prada' },
    //     { value: 'Chanel', viewValue: 'Chanel' },
    //   ];
    allCountries: Country[] =
    [
        {countryId: 'India'},
        {countryId: 'Philippines'}
    ];
    allFloors: Floor[] =
    [
    { floorId: 'Floor 1'},
    { floorId: 'Floor 2'},
    { floorId: 'Floor 3'},
    { floorId: 'Floor 4'},
    { floorId: 'Floor 5'},
    { floorId: 'Floor 6'},
    { floorId: 'Floor 7'},
    { floorId: 'Floor 8'},
    { floorId: 'Floor 9'},
    { floorId: 'Floor 10'},
    { floorId: 'Floor 11'},
    { floorId: 'Floor 12'},
    { floorId: 'Floor 13'},
    { floorId: 'Floor 14'},
    { floorId: 'Floor 15'}
    ];
    allBuildings: Building[] =
    [
        {buildingId: 'Tower 1'},
        {buildingId: 'Tower 2'},
        {buildingId: 'Tower 3'}
    ];
    allLocations: LocationPlace[] =
    [
        {locationId: 'Hyderabad'},
        {locationId: 'Bengaluru'},
        {locationId: 'Chennai'  }
    ];
    locationService: any;

    // private _locationService;

    constructor(private route: Router, 
        private _locationService: LocationDetailsService,
        private location: Location) { 

        // this.locationService = locationService;

     }

     toggleView(change: MatButtonToggleChange){
        this.toggle = change.value;
     }

    ngOnInit() {
        // this.allLocations = this.locationService.getLocations();
        
    }
  
    clickEvent() {
        this.route.navigate(['floormappage']);
    }

    goBack(){
        this.location.back();
    }


}