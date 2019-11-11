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


export interface Vehicle2 {
    veh_id_no?: number,
    veh_reg_no?: string,
    veh_dsc?: string,
    SiteID?: number,
    bTracking?: boolean,
    veh_flt_no?: string,
    visible?: boolean,
    finishDate?: Date
}