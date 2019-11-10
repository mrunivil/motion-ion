import { Driver } from 'src/app/model/driver';
import { DriverFilter } from 'src/app/shared/filters/driver.filter';

export class SelectDriver {
    static readonly type = '[DRIVERS] SELECT DRIVER';
    constructor(public payload: Driver) { }
}

export class ApplyDriverFilters {
    static readonly type = '[DRIVERS] APPLY FILTERS';
    constructor(public payload: DriverFilter) { }
}
