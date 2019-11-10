import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { DriversState } from 'src/store/drivers/drivers.state';
import { Observable } from 'rxjs';
import { Driver } from 'src/app/model/driver';

@Component({
    selector: 'app-driver',
    templateUrl: './driver.page.html',
    styleUrls: ['./driver.page.scss'],
})
export class DriverPage implements OnInit {

    @Select(DriversState.selectedDriver) driver$: Observable<Driver>;

    constructor() { }

    ngOnInit() {
    }

}
