import { Driver } from 'src/app/model/driver';

export class SelectDriver {
    static readonly type = '[DRIVERS] SELECT DRIVER';
    constructor(public payload: Driver) { }
}
