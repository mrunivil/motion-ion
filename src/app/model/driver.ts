import { NumericValueAccessor } from '@ionic/angular';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';

export interface Driver {
    name: string;
    speed: number;
    status: DriverStatus;
}

export enum DriverStatus {
    resting, driving
}
