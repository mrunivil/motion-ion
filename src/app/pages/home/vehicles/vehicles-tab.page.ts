import { Router } from '@angular/router';
import { VehiclesService } from './../../../services/vehicles/vehicles.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-tab3',
    templateUrl: 'vehicles-tab.page.html',
    styleUrls: ['vehicles-tab.page.scss']
})
export class VehiclesTabPage {

    constructor(public vehiclesService: VehiclesService, private router: Router) { }

    selectVehicle() {
        this.router.navigate(['/vehicle']);
    }
}
