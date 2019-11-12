import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ToggleAutoRefresh } from './actions';

export class MapStateModel {
    autoRefresh: boolean;
}

@State<MapStateModel>({
    name: 'map',
    defaults: {
        autoRefresh: true
    }
})
export class MapState {

    @Selector()
    static autoRefresh(ctx: MapStateModel) { return ctx.autoRefresh; }

    @Action(ToggleAutoRefresh)
    toggleAutorefresh({ getState, patchState }: StateContext<MapStateModel>) {
        patchState({
            autoRefresh: !getState().autoRefresh
        });
    }
}
