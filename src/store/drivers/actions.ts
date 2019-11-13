import { Driver } from 'src/app/model/driver';
import { DriverFilter } from 'src/app/shared/filters/driver.filter';
import { DriversService } from "src/app/services/drivers/drivers.service";

export class SelectDriver {
    static readonly type = '[DRIVERS] SELECT DRIVER';
    constructor(public payload: Driver) { }
}

export class ApplyDriversFilters {
    static readonly type = '[DRIVERS] APPLY FILTERS';
    constructor(public payload: DriverFilter) { }
}

export class GetAllDriver {
    static readonly type = '[DRIVERS] GET ALL DRIVER';
    constructor() { }
}

export class GetDriverTrackDetailsByIds {
    static readonly type = '[DRIVERS] GET DRIVER TRACK DETAILS';
    constructor(public driverIds: number[]) { }
}

export class UpdateDriverTrackDetails {
    static readonly type = '[DRIVERS] UPDATE DRIVER TRACK DETAILS';
    constructor() { }
}