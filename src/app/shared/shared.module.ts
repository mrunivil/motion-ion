import { NgModule } from '@angular/core';
import { FilterModalComponent } from './components/filter/common-filter.modal';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    SortingDriversPipe,
    VehiclesOnlineFilterPipe,
    TimeSincePipe,
    SortingVehiclesPipe,
    DriversOnlineFilterPipe
} from './pipes/common.pipes';

@NgModule({
    imports: [IonicModule, CommonModule, FormsModule],
    exports: [
        SortingDriversPipe,
        SortingVehiclesPipe,
        VehiclesOnlineFilterPipe,
        DriversOnlineFilterPipe,
        TimeSincePipe
    ],
    declarations: [
        FilterModalComponent,
        SortingDriversPipe,
        SortingVehiclesPipe,
        VehiclesOnlineFilterPipe,
        DriversOnlineFilterPipe,
        TimeSincePipe],
    entryComponents: [FilterModalComponent]
})
export class SharedModule { }
