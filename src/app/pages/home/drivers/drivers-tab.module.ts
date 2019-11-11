import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgxsModule } from '@ngxs/store';
import { SharedModule } from 'src/app/shared/shared.module';
import { DriversState } from 'src/store/drivers/drivers.state';
import { OnlineFilterPipe, TimeSincePipe, SortingPipe } from '../../../shared/pipes/common.pipes';
import { DriversTabPage } from './drivers-tab.page';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        SharedModule,
        NgxsModule.forFeature([DriversState]),
        RouterModule.forChild([{ path: '', component: DriversTabPage }])
    ],
    declarations: [
        DriversTabPage,
    ]
})
export class DriversTabPageModule { }
