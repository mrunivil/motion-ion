import { OnlineStatus } from './online';


export interface Driver extends OnlineStatus {
    name: string;
    speed: number;
    status: DriverStatus;
    remainingTime: number;
    lastUpdate: number;
}

export enum DriverStatus {
    resting = 0, driving = 1
}

import { OSMLocation } from './location';

export interface DriverObject {
    drv_id_no?: number,
    drv_ttl?: string,
    drv_for_nm?: string,
    drv_sur_nm?: string,
    drv_ref_no?: string,
    lSiteID?: number,
    dUpdateDate?: Date,
    dOnlineStatus?: string,
    AllowMsg_App?: number,
    iAllowToUseFleetApp?: number,
    difference?: number,
    visible?: boolean,
    finishDate?: Date
}

export interface DriverActivityTrace {
    DriverId?: number,
    CoDriverId?: number,
    DriverCardNumber?: string,
    DriverCardIssuingMemberState?: string,
    cda?: number,
    CoDriverCardNumber?: string,
    StartTime?: number,
    StartOdometer?: number,
    StartLatitude?: number,
    StartLongitude?: number,
    OSMStartLocation?: OSMLocation,
    CurrentSpeed?: number,
    DriverActivity?: number,
    TotalActiveTime?: number,
    TotalInActiveTime?: number,
    IsCoDriver?: boolean,
    EndTime?: number,
    EndOdometer?: number,
    EndLatitude?: number,
    EndLongitude?: number,
    OSMEndLocation?: OSMLocation,
    IsWorking?: boolean
}