import { DriversService } from './../../../services/drivers/drivers.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-drivers-tab',
    templateUrl: 'drivers-tab.page.html',
    styleUrls: ['drivers-tab.page.scss']
})
export class DriversTabPage {

    constructor(public driversService: DriversService, private router: Router) { }

    selectDriver() {
        this.router.navigate(['/driver']);
    }

}
