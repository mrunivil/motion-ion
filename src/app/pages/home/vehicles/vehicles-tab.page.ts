import { Router } from '@angular/router';
import { VehiclesService } from './../../../services/vehicles/vehicles.service';
import { Component } from '@angular/core';
import { Vehicle } from 'src/app/model/vehicle';
import { Store } from '@ngxs/store';
import { SelectVehicle } from 'src/store/vehicles/actions';

@Component({
    selector: 'app-tab3',
    templateUrl: 'vehicles-tab.page.html',
    styleUrls: ['vehicles-tab.page.scss']
})
export class VehiclesTabPage {

    constructor(public vehiclesService: VehiclesService, private store: Store) { }

    selectVehicle(selected: Vehicle) {
        this.store.dispatch(new SelectVehicle(selected));
    }
}
