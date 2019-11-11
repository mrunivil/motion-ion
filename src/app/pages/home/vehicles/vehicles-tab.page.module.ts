import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VehiclesTabPage } from './vehicles-tab.page';
import { NgxsModule } from '@ngxs/store';
import { VehiclesState } from 'src/store/vehicles/vehicles.state';
import { FilterModalComponent } from 'src/app/shared/components/filter/common-filter.modal';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        SharedModule,
        NgxsModule.forFeature([VehiclesState]),
        RouterModule.forChild([{ path: '', component: VehiclesTabPage }])
    ],
    declarations: [VehiclesTabPage]
})
export class VehiclesTabPageModule { }
