import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapTabPage } from './map-tab.page';
import { SharedModule } from 'src/app/shared/modules/shared.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        SharedModule,
        RouterModule.forChild([{ path: '', component: MapTabPage }])
    ],
    declarations: [MapTabPage]
})
export class Tab1PageModule { }
