import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { mergeMap, materialize, delay, dematerialize } from 'rxjs/operators';


const drivers = [
    {
        online: false,
        id: 20,
        site_id: 4,
        name: 'Kokou Agbokou',
        lastUpdate: 1573048722510,
        trackDetails: {
            DriverId: 20,
            DriverSiteID: null,
            DriverGPSTimeStamp: 1573230586,
            DriverDTCOTimeStamp: 1573230500,
            isDriverOnline: false,
            StartLatitude: 48.1995,
            StartLangitude: 14.1512,
            DriverLatitude: 48.1995,
            DriverLongitude: 14.1512,
            StartLocation: '',
            EndLocation: '',
            DriverHeadingChange: 0,
            isCalculatedByDTCO: true,
            AvailabilityTime: 36000,
            RemainingRest: 0,
            TotalDrivingTime: 12510,
            TotalActiveTime: 25381,
            TotalPassiveTime: 18,
            TotalRestTime: 3392,
            IsDriverWorking: false,
            IsCoDriver: false,
            ShiftStartTime: '2019-11-08 04:59:59',
            ShiftEndTime: '2019-11-08 16:28:20',
            DriverCardNumber: '1000000118103001',
            DriverCardIssuingMemberState: '1',
            CalenderDate: '2019-11-08T05:01:34.000Z',
            CurrentActivityCode: 'RS',
            CurrentActivityType: 1,
            RemainingTimeTillNextRestBreak: 212,
            RemainingDailyDrivingPeriod: 212,
            ActvityDurations: {
                total: {
                    drivingTime: 12510,
                    activeTime: 25381,
                    passiveTime: 18,
                    restingTime: 3392,
                    distance: 127.97999999998137
                },
                perVehicle: [
                    {
                        drivingTime: 12510,
                        activeTime: 25381,
                        passiveTime: 18,
                        restingTime: 3392,
                        distance: 127.97999999998137,
                        vrn: 'HO CSR27',
                        vehicleId: 15,
                        startTime: 1573189199,
                        startLocation: {
                            lat: 48.1995,
                            lng: 14.1512
                        },
                        endTime: 1573230500,
                        endLocation: {
                            lat: 48.1995,
                            lng: 14.1512
                        },
                        isVehicleOnline: false
                    }
                ]
            }
        }
    }
];


@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // wrap in delayed observable to simulate server api call
        return this.handleRoute(request, next).pipe(materialize(), delay(500), dematerialize());

    }
    handleRoute(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        if (!environment.production) {
            if (url.endsWith('/api/getDrivers') && method === 'GET') {
                return of(this.getDrivers());
            }
        }
        return next.handle(request);
    }

    ok(body?: any) {
        return new HttpResponse({ status: 200, body });
    }

    getDrivers() {
        return this.ok(drivers);
    }
}

export const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
