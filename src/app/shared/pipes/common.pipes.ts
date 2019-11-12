import { Pipe, PipeTransform } from '@angular/core';
import { Driver } from 'src/app/model/driver';
import { FilterCategory } from 'src/app/shared/filters/filter-category';
import { DriverFilter } from 'src/app/shared/filters/driver.filter';
import { SortingDirection } from 'src/app/shared/filters/sorting-directions';
import { Vehicle } from 'src/app/model/vehicle';
import { VehicleFilter } from '../filters/vehicle.filter';
import { OnlineStatus } from 'src/app/model/online';

@Pipe({ name: 'sortingDrivers' })
export class SortingDriversPipe implements PipeTransform {
    transform(value: Driver[], filter: DriverFilter): Driver[] {
        return value.sort((a: Driver, b: Driver) => {
            let ret = 0;
            if (filter.category === FilterCategory.remainingTime) {
                ret = a.remainingTime > b.remainingTime ? -1 : 1;
            } else if (filter.category === FilterCategory.drivingStatus) {
                ret = a.status > b.status ? -1 : 1;
            } else if (filter.category === FilterCategory.lastUpdate) {
                ret = a.lastUpdate > b.lastUpdate ? -1 : 1;
            }
            return filter.order === SortingDirection.descending ? ret * -1 : ret;
        });
    }
}
@Pipe({ name: 'sortingVehicles' })
export class SortingVehiclesPipe implements PipeTransform {
    transform(value: Vehicle[], filter: VehicleFilter): Vehicle[] {
        return value.sort((a: Vehicle, b: Vehicle) => {
            let ret = 0;
            if (filter.category === FilterCategory.remainingTime) {
                ret = a.remainingTime > b.remainingTime ? -1 : 1;
            } else if (filter.category === FilterCategory.drivingStatus) {
                ret = a.status > b.status ? -1 : 1;
            } else if (filter.category === FilterCategory.lastUpdate) {
                ret = a.lastUpdate > b.lastUpdate ? -1 : 1;
            }
            return filter.order === SortingDirection.descending ? ret * -1 : ret;
        });
    }
}

@Pipe({ name: 'vOnline' })
export class VehiclesOnlineFilterPipe implements PipeTransform {
    transform(value: Vehicle[], online: boolean) {
        return value.filter(val => val.online === online);
    }
}

@Pipe({ name: 'dOnline' })
export class DriversOnlineFilterPipe implements PipeTransform {
    transform(value: Driver[], online: boolean) {
        return value.filter(val => val.online === online);
    }
}

const fiveDays = 1000 * 60 * 60 * 24 * 5;
const oneDay = 1000 * 60 * 60 * 24;
const oneHour = 1000 * 60 * 60;
const oneMinute = 1000 * 60;
@Pipe({ name: 'ago' })
export class TimeSincePipe implements PipeTransform {
    transform(value: number): string {

        const val = Date.now() - value;
        // max 5 days ago
        if (val >= fiveDays) {
            return '5+ days ago';
        } else if (val >= oneDay) {
            return (val / oneDay).toFixed(0) + ' days ago';
        } else if (val >= oneHour) {
            return (val / oneHour).toFixed(0) + ' hours ago';
        } else {
            return (val / oneMinute).toFixed(0) + ' minutes ago';
        }
    }
}
