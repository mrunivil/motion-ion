import { OnlineStatus } from './online';

export interface Vehicle extends OnlineStatus {
    name: string;
    speed: number;
    status: VehicleStatus;
    remainingTime: number;
    lastUpdate: number;
}

export enum VehicleStatus {
    resting, driving
}

export interface VehicleObject {
    veh_id_no?: number,
    veh_reg_no?: string,
    veh_dsc?: string,
    SiteID?: number,
    bTracking?: boolean,
    veh_flt_no?: string,
    visible?: boolean,
    finishDate?: Date
}