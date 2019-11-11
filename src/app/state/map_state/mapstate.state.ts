import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ToggleMapInteractivityAction as ToggleMapInteractivityAction } from './mapstate.actions';

declare var H: any;

export class MapStateModel {
  public isInteractive: boolean;
}

@State<MapStateModel>({
  name: 'mapstate',
  defaults: {
    isInteractive: true,
  }
})
export class MapState {

  @Selector() static isInteractive(state: MapStateModel) { return state.isInteractive; };

  @Action(ToggleMapInteractivityAction)
  toggleMapInteractivity({ patchState, getState }: StateContext<MapStateModel>) {
    patchState({
      isInteractive: !getState().isInteractive
    });
  }

}
