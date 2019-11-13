import { OnlineStatus } from './online';
import { VehiclePosition } from './vehiclePosition';

export class Vehicle extends OnlineStatus {
    id?: number;
    name?: string;
    site_id?: number;
    fleet_id?: string;
    status?: VehicleStatus;
    remainingTime?: number;
    lastUpdate?: number;
    position?: VehiclePosition;

    constructor(vehObj :VehicleObject){
        super("false");
        this.id = vehObj.veh_id_no;
        this.site_id = vehObj.lSiteID;
        this.name = vehObj.veh_reg_no;
        this.fleet_id = vehObj.veh_flt_no;
    }
}

export enum VehicleStatus {
    resting, driving
}

export interface VehicleObject {
    veh_id_no?: number,
    veh_reg_no?: string,
    veh_dsc?: string,
    lSiteID?: number,
    bTracking?: boolean,
    veh_flt_no?: string,
    visible?: boolean,
    finishDate?: Date
}