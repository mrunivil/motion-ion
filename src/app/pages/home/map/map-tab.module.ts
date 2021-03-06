import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapTabPage } from './map-tab.page';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { NgxsModule } from '@ngxs/store';
import { MapState } from 'src/store/map/map.state';
import { VehiclesState } from 'src/store/vehicles/vehicles.state';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        SharedModule,
        NgxsModule.forFeature([MapState,VehiclesState]),
        RouterModule.forChild([{ path: '', component: MapTabPage }])
    ],
    declarations: [MapTabPage]
})
export class Tab1PageModule { }
