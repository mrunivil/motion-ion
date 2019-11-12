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
