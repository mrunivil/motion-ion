import { Pipe, PipeTransform } from '@angular/core';
import { Driver } from 'src/app/model/driver';
import { DriverFilterCategory } from 'src/app/shared/filters/driver-filter-category';
import { DriverFilter } from 'src/app/shared/filters/driver.filter';
import { SortingDirection } from 'src/app/shared/filters/sorting-directions';

@Pipe({ name: 'sortDrivers' })
export class SortDriversPipe implements PipeTransform {
    transform(value: Driver[], filter: DriverFilter): Driver[] {
        return value.sort((a: Driver, b: Driver) => {
            let ret = 0;
            if (filter.category === DriverFilterCategory.remainingTime) {
                ret = a.remainingTime > b.remainingTime ? 1 : -1;
            } else if (filter.category === DriverFilterCategory.drivingStatus) {
                ret = a.status > b.status ? 1 : -1;
            } else if (filter.category === DriverFilterCategory.lastUpdate) {
                ret = a.lastUpdate > b.lastUpdate ? 1 : -1;
            }
            return filter.order === SortingDirection.descending ? ret * -1 : ret;
        });
    }
}

@Pipe({ name: 'online' })
export class OnlineFilterPipe implements PipeTransform {
    transform(value: Driver[], online: boolean) {
        return value.filter(val => val.online === online);
    }
}
