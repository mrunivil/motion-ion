import { OSMLocation, MapLocation } from './location';

export interface driverTrackDetails{
    DriverId?: number,
    DriverSiteID?: number,
    DriverGPSTimeStamp?: number,
    DriverDTCOTimeStamp?: number,
    isDriverOnline?: boolean,
    StartLatitude?: number,
    StartLangitude?: number,
    OSMStartLocation?: OSMLocation[],
    DriverLatitude?: number,
    DriverLongitude?: number,
    OSMEndLocation?: OSMLocation[],
    StartLocation?: string,
    EndLocation?: string,
    DriverHeadingChange?: number,
    isCalculatedByDTCO?: boolean,
    AvailabilityTime?: number,
    RemainingRest?: number,
    TotalDrivingTime?: number,
    TotalActiveTime?: number,
    TotalPassiveTime?: number,
    TotalRestTime?: number,
    IsDriverWorking?: boolean,
    IsCoDriver?: boolean,
    ShiftStartTime?: Date,
    ShiftEndTime?: Date,
    DriverCardNumber?: string,
    DriverCardIssuingMemberState?: string,
    CalenderDate?: Date,
    CurrentActivityCode?: string,
    CurrentActivityType?: number,
    RemainingTimeTillNextRestBreak?: number,
    RemainingDailyDrivingPeriod?: number,
    ActvityDurations?: {
        total?: ActvityDuration,
        perVehicle?: ActvityDuration[]
    }
}

export interface ActvityDuration{
    drivingTime?: number,
    activeTime?: number,
    passiveTime?: number,
    restingTime?: number,
    distance?: number,
    vrn?: string,
    vehicleId?: number,
    startTime?: number,
    startLocation?: MapLocation,
    endTime?: number,
    endLocation?: MapLocation,
    isVehicleOnline?: boolean
}