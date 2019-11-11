import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Vehicle, VehicleObject } from 'src/app/model/vehicle';
import data from './data';
import { HttpClient } from '@angular/common/http';
import { ErrorService } from '../error/error.service';
import { urls } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class VehiclesService {

    constructor(private http: HttpClient, private error: ErrorService) { }

    getVehicles(): Observable<Vehicle[]> {
        return of(data);
    }
    getVehicleObjects(): Observable<VehicleObject[]> {
        return this.http.get<VehicleObject[]>(urls.GET_ALL_DRIVER).pipe(catchError(this.error.handleError));
    }    
}

