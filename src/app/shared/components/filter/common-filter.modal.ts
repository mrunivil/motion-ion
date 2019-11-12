import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { DriverFilter as CustomFilter, FILTER_CATEGORIES as FILTER_CATEGORIES } from '../../filters/driver.filter';
import { SORTING_ORDERS } from '../../filters/sorting-directions';

@Component({
    selector: 'app-modal-filter-common',
    templateUrl: 'common-filter.modal.html'
})
export class FilterModalComponent {

    filter: CustomFilter;
    categories = FILTER_CATEGORIES;
    sortingOrders = SORTING_ORDERS;

    title: string;

    constructor(private controller: ModalController, private navParams: NavParams) {
        this.filter = this.navParams.get('filter');
        this.title = this.navParams.get('title');
    }

    dismiss() {
        this.controller.dismiss();
    }

    resetFilters() {
        this.filter = new CustomFilter();
    }

    submit() {
        this.controller.dismiss(this.filter);
    }
}
