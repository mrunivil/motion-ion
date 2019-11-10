import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { ApplyDriverFilters } from 'src/store/drivers/actions';
import { DriversState } from 'src/store/drivers/drivers.state';
import { DriverFilter, DRIVER_FILTERS } from '../filters/driver.filter';
import { SortingDirection as SortingOrder } from '../filters/sorting-directions';

@Component({
    selector: 'app-modal-filter-drivers',
    templateUrl: 'filter-drivers.modal.html'
})
export class FilterDriversModalComponent {

    filter: DriverFilter;
    categories = DRIVER_FILTERS;
    constructor(private controller: ModalController, private store: Store) {
        this.filter = { ...this.store.selectSnapshot(DriversState.filter) };
    }

    dismiss() {
        this.controller.dismiss();
    }

    sortValue() {
        switch (this.filter.order) {
            case SortingOrder.ascending:
                return 0;
            case SortingOrder.descending:
                return 1;
            default: return 0;
        }
    }

    changedOrder(val: CustomEvent) {
        switch (val.detail.value) {
            case 0:
                this.filter.order = SortingOrder.ascending;
                break;
            case 1:
                this.filter.order = SortingOrder.descending;
                break;
            default: return;
        }
    }

    resetFilters() {
        this.filter = new DriverFilter();
    }

    submit() {
        this.store.dispatch(new ApplyDriverFilters(this.filter));
        this.controller.dismiss();
    }
}
