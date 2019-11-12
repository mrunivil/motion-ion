import { OnlineStatus } from './online';
import { OSMLocation } from './location';
import { DriverTrackDetails } from './driverTrackDetails';

export class Driver extends OnlineStatus {
    id: number;
    name: string;
    site_id?: number;
    status?: DriverStatus;
    remainingTime?: number;
    lastUpdate?: number;
    trackDetails?: DriverTrackDetails;

    constructor(drvObj: DriverObject) {
        super(drvObj.dOnlineStatus);
        this.id = drvObj.drv_id_no;
        this.site_id = drvObj.lSiteID;
        this.name = drvObj.drv_for_nm + ' ' + drvObj.drv_sur_nm;
        this.lastUpdate = new Date(drvObj.dUpdateDate).valueOf();
    }
}

export enum DriverStatus {
    resting = 0, driving = 1
}

export interface DriverObject {
    drv_id_no?: number,
    drv_ttl?: string,
    drv_for_nm?: string,
    drv_sur_nm?: string,
    drv_ref_no?: string,
    lSiteID?: number,
    dUpdateDate?: string,
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