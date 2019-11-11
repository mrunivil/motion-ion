import { NgModule } from '@angular/core';
import { FilterModalComponent } from './components/filter/common-filter.modal';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SortingPipe, OnlineFilterPipe, TimeSincePipe } from './pipes/common.pipes';

@NgModule({
    imports: [IonicModule, CommonModule, FormsModule],
    exports: [SortingPipe, OnlineFilterPipe, TimeSincePipe],
    declarations: [FilterModalComponent, SortingPipe, OnlineFilterPipe, TimeSincePipe],
    entryComponents: [FilterModalComponent]
})
export class SharedModule { }
