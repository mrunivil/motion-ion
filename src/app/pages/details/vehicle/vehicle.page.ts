import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { VehiclesState } from 'src/store/vehicles/drivers.state';
import { Vehicle } from 'src/app/model/vehicle';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-vehicle',
    templateUrl: './vehicle.page.html',
    styleUrls: ['./vehicle.page.scss'],
})
export class VehiclePage implements OnInit {

    @Select(VehiclesState.selectedVehicle) vehicle$: Observable<Vehicle>;
    constructor() { }

    ngOnInit() {
    }

}
