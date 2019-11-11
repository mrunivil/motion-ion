import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Driver } from 'src/app/model/driver';
import { FilterModalComponent } from 'src/app/shared/components/filter-drivers.modal';
import { DriverFilter } from 'src/app/shared/filters/driver.filter';
import { ApplyDriversFilters, SelectDriver } from 'src/store/drivers/actions';
import { DriversState } from 'src/store/drivers/drivers.state';
import { DriversService } from './../../../services/drivers/drivers.service';

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
            component: FilterModalComponent,
            componentProps: {
                filter: { ...this.store.selectSnapshot(DriversState.filter) },
                title: 'Filter Drivers'
            }
        });
        await modal.present();
        const filter = await modal.onWillDismiss();
        if (filter.data) {
            this.store.dispatch(new ApplyDriversFilters(filter.data));
        }
    }

}
