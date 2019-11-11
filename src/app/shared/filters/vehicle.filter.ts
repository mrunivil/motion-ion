import { SortingDirection as SortingOrder } from './sorting-directions';
import { FilterCategory } from './filter-category';

export class VehicleFilter {
    category: FilterCategory;
    order: SortingOrder;
    constructor() {
        this.category = FilterCategory.remainingTime;
        this.order = SortingOrder.ascending;
    }
}

export const FILTER_CATEGORIES = [
    {
        value: FilterCategory.remainingTime,
        label: 'remaining driving time'
    },
    {
        value: FilterCategory.lastUpdate,
        label: 'last update'
    },

    {
        value: FilterCategory.drivingStatus,
        label: 'driving status'
    }
];


