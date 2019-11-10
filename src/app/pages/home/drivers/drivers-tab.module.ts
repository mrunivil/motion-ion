import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DriversTabPage } from './drivers-tab.page';
import { NgxsModule } from '@ngxs/store';
import { DriversState } from 'src/store/drivers/drivers.state';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        NgxsModule.forFeature([DriversState]),
        RouterModule.forChild([{ path: '', component: DriversTabPage }])
    ],
    declarations: [DriversTabPage]
})
export class DriversTabPageModule { }
