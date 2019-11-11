import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Store, Select } from '@ngxs/store';
import { Vehicle } from 'src/app/model/vehicle';
import { FilterModalComponent } from 'src/app/shared/components/filter-drivers.modal';
import { ApplyVehiclesFilters, SelectVehicle } from 'src/store/vehicles/actions';
import { VehiclesState } from 'src/store/vehicles/vehicles.state';
import { VehiclesService } from './../../../services/vehicles/vehicles.service';
import { VehicleFilter } from 'src/app/shared/filters/vehicle.filter';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-tab3',
    templateUrl: 'vehicles-tab.page.html',
    styleUrls: ['vehicles-tab.page.scss']
})
export class VehiclesTabPage {


    @Select(VehiclesState.filter) filter$: Observable<VehicleFilter>;

    constructor(
        public vehiclesService: VehiclesService,
        private store: Store,
        private modalController: ModalController
    ) { }

    selectVehicle(selected: Vehicle) {
        this.store.dispatch(new SelectVehicle(selected));
    }

    async toggleFilter() {
        const modal = await this.modalController.create({
            component: FilterModalComponent,
            componentProps: {
                filter: { ...this.store.selectSnapshot(VehiclesState.filter) },
                title: 'Filter Vehicles'
            }
        });
        await modal.present();
        const filter = await modal.onWillDismiss();
        if (filter.data) {
            this.store.dispatch(new ApplyVehiclesFilters(filter.data));
        }
    }
}
