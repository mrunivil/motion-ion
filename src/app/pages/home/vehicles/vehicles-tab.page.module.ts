import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VehiclesTabPage } from './vehicles-tab.page';
import { NgxsModule } from '@ngxs/store';
import { VehiclesState } from 'src/store/vehicles/drivers.state';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        NgxsModule.forFeature([VehiclesState]),
        RouterModule.forChild([{ path: '', component: VehiclesTabPage }])
    ],
    declarations: [VehiclesTabPage]
})
export class VehiclesTabPageModule { }
