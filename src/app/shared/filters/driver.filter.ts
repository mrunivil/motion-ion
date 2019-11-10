import { SortingDirection as SortingOrder } from './sorting-directions';
import { DriverFilterCategory } from './driver-filter-category';

export class DriverFilter {
    category: DriverFilterCategory;
    order: SortingOrder;
    constructor() {
        this.category = DriverFilterCategory.remainingTime;
        this.order = SortingOrder.ascending;
    }
}

export const DRIVER_FILTERS = [
    {
        value: DriverFilterCategory.remainingTime,
        label: 'remaining driving time'
    },
    {
        value: DriverFilterCategory.lastUpdate,
        label: 'last update'
    },

    {
        value: DriverFilterCategory.drivingStatus,
        label: 'driving status'
    }
];


