import { Injectable } from '@angular/core';
import { Location } from './seatmanagement/location'


@Injectable({
  providedIn: 'root'
})
export class LocationDetailsService {

  getLocations(): Location[] {
      return
      [
        { floorId: "Floor 1"},
    { floorId: 'Floor 2'},
    { floorId: 'Floor 3'}
    ];
      // [
      //   {
      //    locationName : "Hyderabad",
      //    buildingId : "Tower 1",  
      //    floorId : "Floor 1"
      //   },
      //   {
      //     locationName : "Hyderabad",
      //     buildingId : "Tower 1",  
      //     floorId : "Floor 2"
      //   },
      //   {
      //     locationName : "Hyderabad",
      //     buildingId : "Tower 1",  
      //     floorId : "Floor 3"
      //   },
      //   {
      //     "locationName" : "Hyderabad",
      //     "buildingId" : "Tower 1",  
      //     floorId : "Floor 4"
      //   }

      // ];
}


  //   let location = [
  //  new Location('Hyderabad', 'Tower 1', 'Floor 1'),
  //  new Location('Bengaluru', 'Tower 2', 'Floor 1'),
  //  new Location('Hyderabad', 'Tower 2', 'Floor 2')
   
  //   ]	 
  //   return location;

  // constructor() { }
}

