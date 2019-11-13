import { Vehicle } from 'src/app/model/vehicle';
import { VehicleFilter } from 'src/app/shared/filters/vehicle.filter';

export class SelectVehicle {
    static readonly type = '[VEHICLES] SELECT VEHICLE';
    constructor(public payload: Vehicle) { }
}

export class ApplyVehiclesFilters {
    static readonly type = '[VEHICLES] APPLY FILTERS';
    constructor(public payload: VehicleFilter) { }
}

export class GetAllVehicles{
    static readonly type = '[VEHICLES] GET ALL VEHICLES';
    constructor () {}
}

export class GetVehicleTrackDetailsByIds{
    static readonly type = '[VEHICLES] GET VEHICLE TRACK DETAILS';
    constructor (public vehicleIds: number[]) {}
}

export class GetVehiclePositionsByIds{
    static readonly type = '[VEHICLES] GET VEHICLE POSITIONS';
    constructor (public vehicleIds: number[]) {}
}