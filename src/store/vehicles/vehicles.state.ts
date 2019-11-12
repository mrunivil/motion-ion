import { Navigate } from '@ngxs/router-plugin';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Vehicle } from 'src/app/model/vehicle';
import { VehicleFilter } from 'src/app/shared/filters/vehicle.filter';
import { ApplyVehiclesFilters, SelectVehicle } from './actions';

export class VehiclesStateModel {
    selected: Vehicle;
    filter: VehicleFilter;
}

@State<VehiclesStateModel>({
    name: 'vehicles',
    defaults: {
        selected: undefined,
        filter: new VehicleFilter(),
    }
})
export class VehiclesState {

    @Selector()
    static selectedVehicle(ctx: VehiclesStateModel) { return ctx.selected; }
    @Selector()
    static filter(ctx: VehiclesStateModel) { return ctx.filter; }

    @Action(SelectVehicle)
    selectDriver({ dispatch, patchState }: StateContext<VehiclesStateModel>, { payload }: SelectVehicle) {
        patchState({
            selected: payload
        });
        dispatch(new Navigate(['/vehicle']));
    }
    @Action(ApplyVehiclesFilters)
    applyFilters({ patchState }: StateContext<VehiclesStateModel>, { payload }: ApplyVehiclesFilters) {
        patchState({
            filter: payload
        });
    }
}
