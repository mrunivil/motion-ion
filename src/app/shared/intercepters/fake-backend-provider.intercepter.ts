import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, dematerialize, materialize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import drivers from '../../services/drivers/data';



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
