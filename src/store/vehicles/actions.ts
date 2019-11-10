import { Vehicle } from 'src/app/model/vehicle';

export class SelectVehicle {
    static readonly type = '[Vehicles] SELECT VEHICLE';
    constructor(public payload: Vehicle) { }
}
