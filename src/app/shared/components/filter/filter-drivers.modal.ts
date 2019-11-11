import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { ApplyDriverFilters } from 'src/store/drivers/actions';
import { DriversState } from 'src/store/drivers/drivers.state';
import { DriverFilter, DRIVER_FILTERS } from '../../filters/driver.filter';
import { SortingDirection as SortingOrder, SORTING_ORDERS } from '../../filters/sorting-directions';

@Component({
    selector: 'app-modal-filter-drivers',
    templateUrl: 'filter-drivers.modal.html'
})
export class FilterDriversModalComponent {

    filter: DriverFilter;
    categories = DRIVER_FILTERS;
    sortingOrders = SORTING_ORDERS;

    constructor(private controller: ModalController, private store: Store) {
        this.filter = { ...this.store.selectSnapshot(DriversState.filter) };
    }

    dismiss() {
        this.controller.dismiss();
    }

    resetFilters() {
        this.filter = new DriverFilter();
    }

    submit() {
        this.store.dispatch(new ApplyDriverFilters(this.filter));
        this.controller.dismiss();
    }
}
