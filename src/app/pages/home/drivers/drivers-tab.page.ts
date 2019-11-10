import { DriversService } from './../../../services/drivers/drivers.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store, Select } from '@ngxs/store';
import { SelectDriver } from 'src/store/drivers/actions';
import { Driver } from 'src/app/model/driver';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { FilterDriversModalComponent } from 'src/app/shared/components/filter-drivers.modal';
import { DriversState } from 'src/store/drivers/drivers.state';
import { Observable } from 'rxjs';
import { DriverFilter } from 'src/app/shared/filters/driver.filter';

@Component({
    selector: 'app-drivers-tab',
    templateUrl: 'drivers-tab.page.html',
    styleUrls: ['drivers-tab.page.scss']
})
export class DriversTabPage {

    @Select(DriversState.filter) filter$: Observable<DriverFilter>;

    constructor(
        public driversService: DriversService,
        private store: Store,
        private modalController: ModalController
    ) { }

    selectDriver(selected: Driver) {
        this.store.dispatch(new SelectDriver(selected));
    }

    async toggleFilter() {
        const modal = await this.modalController.create({
            component: FilterDriversModalComponent
        });
        return await modal.present();
    }

}
