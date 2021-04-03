// export interface Location { 
//     // constructor(public locationName:string, public buildingId:string, public floorId:string) {
//     // }
//     locationId: string; buildingId: string; floorId: string;	
// } 

export interface Floor {
    floorId: string;
    // buildingId: string;
  }

export interface Building {
    buildingId: string;
  }

export interface LocationPlace {
    locationId: string;
  }

export interface Country {
    countryId: string;
}