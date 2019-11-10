import { Navigate } from '@ngxs/router-plugin';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Vehicle } from 'src/app/model/vehicle';
import { SelectVehicle } from './actions';

export class VehiclesStateModel {
    selected: Vehicle;
}

@State<VehiclesStateModel>({
    name: 'vehicles',
    defaults: {
        selected: undefined,
    }
})
export class VehiclesState {

    @Selector()
    static selectedVehicle(ctx: VehiclesStateModel) { return ctx.selected; }

    @Action(SelectVehicle)
    selectDriver({ dispatch, patchState }: StateContext<VehiclesStateModel>, { payload }: SelectVehicle) {
        patchState({
            selected: payload
        });
        dispatch(new Navigate(['/vehicle']));
    }
}
