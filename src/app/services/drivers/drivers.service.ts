import { Driver, DriverObject } from './../../model/driver';
import { Injectable } from '@angular/core';
import { Observable, throwError, combineLatest } from 'rxjs';
import data from './data';
import { of } from 'rxjs';
import { urls } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { DriverTrackDetails } from 'src/app/model/driverTrackDetails';
import { catchError, map, toArray, switchMapTo, switchMap, tap } from 'rxjs/operators';
import { ErrorService } from '../error/error.service';

@Injectable({
    providedIn: 'root'
})
export class DriversService {

    constructor(private http: HttpClient, private error: ErrorService) { }

    getDrivers(): Observable<Driver[]> {
        return of(data);
    }
    getDriversObjects(): Observable<Driver[]> {
        return this.http.get<DriverObject[]>(urls.GET_ALL_DRIVER)
            .pipe(
                map(drivers => drivers.map(driver => new Driver(driver))),
                catchError(res => {
                    return this.error.handleError;
                }));
    }
    getDriverTrackDetails(driverIds: number[]): Observable<DriverTrackDetails[]> {
        return this.http.get<DriverTrackDetails[]>
            (urls.GET_DRIVER_TRACK_DETAILS_BY_IDS(driverIds))
            .pipe(catchError(this.error.handleError));
    }


}

