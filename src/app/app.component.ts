import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common"

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'WELLS FARGO';

    constructor(private location: Location) {  }

    // goBack(){
    //     this.location.back();
    // }
}