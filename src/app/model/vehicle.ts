import { NumericValueAccessor } from '@ionic/angular';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';

export interface Vehicle {
    name: string;
    speed: number;
    status: VehicleStatus;
}

export enum VehicleStatus {
    resting, driving
}
