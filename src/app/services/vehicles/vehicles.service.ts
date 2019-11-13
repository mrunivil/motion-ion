import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Vehicle, VehicleObject } from 'src/app/model/vehicle';
import data from './data';
import { HttpClient } from '@angular/common/http';
import { ErrorService } from '../error/error.service';
import { urls } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { VehicleTrackDetails } from 'src/app/model/vehicleTrackDetails';
import { VehiclePosition } from 'src/app/model/vehiclePosition';
@Injectable({
    providedIn: 'root'
})
export class VehiclesService {

    constructor(private http: HttpClient, private error: ErrorService) { }

    getVehicles(): Observable<Vehicle[]> {
        return of(data);
    }
    getVehicleObjects(): Observable<Vehicle[]> {
        return this.http.get<VehicleObject[]>(urls.GET_ALL_VEHICLE).pipe(
            map(data => data.map(vehicle => new Vehicle(vehicle))),
            catchError(this.error.handleError));
    }    
    getVehiclePositionsByIds(vehicleIds: number[]): Observable<VehiclePosition[]> {
        return this.http.get<VehiclePosition[]>(urls.GET_VEHICLE_POSITION_BY_IDS(vehicleIds)).pipe(catchError(this.error.handleError));
    }   
    getVehicleTrackDetailsByIds(vehicleIds: number[]): Observable<VehicleTrackDetails[]> {
        return this.http.get<VehicleTrackDetails[]>(urls.GET_VEHICLE_TRACK_DETAILS_BY_IDS(vehicleIds)).pipe(catchError(this.error.handleError));
    }   
}

