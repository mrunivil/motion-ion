import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-modal-filter-drivers',
    templateUrl: 'filter-drivers.modal.html'
})
export class FilterDriversModalComponent {
    constructor(private controller: ModalController) { }

    dismiss() {
        this.controller.dismiss();
    }

    submit() {
        this.controller.dismiss();
    }
}
