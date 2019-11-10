import { Driver } from './../../model/driver';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import data from './data';
import { of } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class DriversService {

    constructor() { }

    getDrivers(): Observable<Driver[]> {
        return of(data);
    }
}

