import { Driver, DriverObject } from './../../model/driver';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import data from './data';
import { of } from 'rxjs';
import { urls } from "src/environments/environment";
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { DriverTrackDetails } from 'src/app/model/driverTrackDetails';
import { catchError } from 'rxjs/operators';
import { ErrorService } from '../error/error.service';
@Injectable({
    providedIn: 'root'
})
export class DriversService {

    constructor(private http: HttpClient, private error: ErrorService) { }

    getDrivers(): Observable<Driver[]> {
        return of(data);
    }
    getDriversObjects(): Observable<DriverObject[]> {
        return this.http.get<DriverObject[]>(urls.GET_ALL_DRIVER).pipe(catchError(this.error.handleError));
    }
    getDriverTrackDetails(): Observable<DriverTrackDetails[]> {
        return this.http.get<DriverTrackDetails[]>(urls.GET_DRIVER_TRACK_DETAILS).pipe(catchError(this.error.handleError));
    }

}

