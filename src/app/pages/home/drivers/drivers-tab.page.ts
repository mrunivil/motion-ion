import { DriversService } from './../../../services/drivers/drivers.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { SelectDriver } from 'src/store/drivers/actions';
import { Driver } from 'src/app/model/driver';

@Component({
    selector: 'app-drivers-tab',
    templateUrl: 'drivers-tab.page.html',
    styleUrls: ['drivers-tab.page.scss']
})
export class DriversTabPage {

    constructor(public driversService: DriversService, private store: Store) { }

    selectDriver(selected: Driver) {
        this.store.dispatch(new SelectDriver(selected));
    }

}
