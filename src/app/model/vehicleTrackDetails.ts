import { OSMLocation } from './location';
import { DriverActivityTrace } from './driver';

export interface driverTrackDetails{
    DriverShiftStart?: Date,
    DriverShiftEnd?: Date,
    CoDriverShiftStart?: Date,
    CoDriverShiftEnd?: Date,
    DriverCardNumber?: string,
    CoDriverCardNumber?: string,
    DriverActivity?: number,
    DriverActivityCode?: string,
    CoDriverActivity?: number,
    CoDriverActivityCode?: string,
    DriverCardIssuingMemberState?: string,
    CoDriverCardIssuingMemberState?: string,
    IsDriverWorking?: boolean,
    IsCoDriverWorking?: boolean,
    DistanceDriven?: number,
    VehicleId?: number,
    DriverId?: number,
    CoDriverId?: number,
    VehicleGPSTimeStamp?: number,
    DTCOTimestamp?: number,
    StartLatitude?: number,
    StartLangitude?: number,
    EndLatitude?: number,
    EndLangitude?: number,
    StartLocation?: string,
    EndLocation?: string,
    VehicleVRN?: string,
    UtilizedCapacity?: null,
    EngineSpeed?: number,
    CurrentSpeed?: number,
    BatteryVoltage?: number,
    CurrentActivity?: string,
    OdometerReading?: number,
    StartOdometer?: number,
    TotalDrivingTime?: number,
    TotalNonDrivingTime?: number,
    HeadingChange?: number,
    VehicleAverageLoad?: number,
    VehicleMaxSpeed?: number,
    TotalIdleTime?: number,
    CalenderDate?: Date,
    CurrentActivityCode?: number,
    isVehicleOnline?: boolean,
    currentActivityTimeline?: ActivityTimeline,
    DriverActivityTrace?: DriverActivityTrace[]
}

export interface ActivityTimeline {
    _id?: string,
    UnKnownAdjusted?: string,
    EndLongitude?: number,
    EndLatitude?: number,
    StartLongitude?: number,
    StartLatitude?: number,
    EndOdometer?: number,
    StartOdometer?: number,
    CurrentSpeed?: number,
    DriverActivityTypeInt?: number,
    DriverActivityType?: string,
    ActivityType?: string,
    Duration?: number,
    CoDriverId?: number,
    DriverId?: number,
    CoDriverCardNumber?: string,
    DriverCardNumber?: string,
    ActivityTypeInt?: number,
    EndTime?: number,
    StartTime?: number,
    StartTotalFuelUsed?: number,
    EndTotalFuelUsed?: number,
    OSMStartLocation?: OSMLocation,
    OSMEndLocation?: OSMLocation
}