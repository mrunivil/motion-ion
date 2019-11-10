import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Driver } from 'src/app/model/driver';
import { SelectDriver } from './actions';
import { Navigate } from '@ngxs/router-plugin';

export class DriversStateModel {
    selected: Driver;


}

@State<DriversStateModel>({
    name: 'drivers',
    defaults: {
        selected: undefined,
    }
})
export class DriversState {


    @Selector()
    static selectedDriver(ctx: DriversStateModel) { return ctx.selected; }

    @Action(SelectDriver)
    selectDriver({ dispatch, patchState }: StateContext<DriversStateModel>, { payload }: SelectDriver) {
        patchState({
            selected: payload
        });
        dispatch(new Navigate(['/driver']));
    }
}
