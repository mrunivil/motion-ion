import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Vehicle } from 'src/app/model/vehicle';
import data from './data';
@Injectable({
    providedIn: 'root'
})
export class VehiclesService {

    constructor() { }

    getVehicles(): Observable<Vehicle[]> {
        return of(data);
    }
}

