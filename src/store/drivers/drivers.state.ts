import { Navigate } from '@ngxs/router-plugin';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Driver } from 'src/app/model/driver';
import { DriverFilter } from 'src/app/shared/filters/driver.filter';
import { ApplyDriverFilters, SelectDriver } from './actions';

export class DriversStateModel {
    selected: Driver;
    filter: DriverFilter;

}

@State<DriversStateModel>({
    name: 'drivers',
    defaults: {
        selected: undefined,
        filter: new DriverFilter()
    }
})
export class DriversState {


    @Selector()
    static selectedDriver(ctx: DriversStateModel) { return ctx.selected; }
    @Selector()
    static filter(ctx: DriversStateModel) { return ctx.filter; }

    @Action(SelectDriver)
    selectDriver({ dispatch, patchState }: StateContext<DriversStateModel>, { payload }: SelectDriver) {
        patchState({
            selected: payload
        });
        dispatch(new Navigate(['/driver']));
    }
    @Action(ApplyDriverFilters)
    applyFilters({ patchState }: StateContext<DriversStateModel>, { payload }: ApplyDriverFilters) {
        patchState({
            filter: payload
        });
    }
}
