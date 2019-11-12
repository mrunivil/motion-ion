import { Component, OnDestroy } from '@angular/core';
import { Store, Actions, ofAction, ofActionSuccessful, Select } from '@ngxs/store';
import { ToggleAutoRefresh } from 'src/store/map/actions';
import { tap } from 'rxjs/operators';
import { MapState } from 'src/store/map/map.state';
import { Observable, Subscription } from 'rxjs';
import { ToastController } from '@ionic/angular';
@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage implements OnDestroy {


    @Select(MapState.autoRefresh) autorefresh$: Observable<boolean>;
    subscription: Subscription;

    toast: HTMLIonToastElement;

    constructor(private store: Store, private toastController: ToastController) {
        this.subscription = this.autorefresh$.subscribe(async (val) => {
            this.toast = await this.toastController.create({
                animated: true,
                message: 'Autorefresh turned ' + (val ? 'on.' : 'off.'),
                duration: 1000
            });
            this.toast.present();
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }


}
