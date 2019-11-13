import { Navigate } from '@ngxs/router-plugin';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Vehicle } from 'src/app/model/vehicle';
import { VehicleFilter } from 'src/app/shared/filters/vehicle.filter';
import { ApplyVehiclesFilters, SelectVehicle, GetVehicleTrackDetailsByIds, GetVehiclePositionsByIds, GetAllVehicles } from './actions';
import { VehicleTrackDetails } from 'src/app/model/vehicleTrackDetails';
import { VehiclePosition } from 'src/app/model/vehiclePosition';
import { VehiclesService } from 'src/app/services/vehicles/vehicles.service';

export class VehiclesStateModel {
    selected: Vehicle;
    filter: VehicleFilter;
    vehicleList: Vehicle[];
    vehicleTrackDetails: VehicleTrackDetails[];
    vehiclePositions: VehiclePosition[];
}

@State<VehiclesStateModel>({
    name: 'vehicles',
    defaults: {
        selected: undefined,
        filter: new VehicleFilter(),
        vehicleList: [],
        vehiclePositions: [],
        vehicleTrackDetails: [],
    }
})
export class VehiclesState {

    constructor(private vehicleService: VehiclesService) { }

    @Selector()
    static selectedVehicle(ctx: VehiclesStateModel) { return ctx.selected; }
    @Selector()
    static filter(ctx: VehiclesStateModel) { return ctx.filter; }
    @Selector()
    static vehicleList(ctx: VehiclesStateModel) { return ctx.vehicleList; }
    @Selector()
    static vehiclePostions(ctx: VehiclesStateModel) { return ctx.vehiclePositions; }
    @Selector()
    static vehicleTrackDetails(ctx: VehiclesStateModel) { return ctx.vehicleTrackDetails; }

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
    @Action(GetAllVehicles)
    getAllVehicles({ patchState, dispatch }: StateContext<VehiclesStateModel>) {
        this.vehicleService.getVehicleObjects().subscribe((result: Vehicle[]) => {
            patchState({
                vehicleList: result
            })
            const ids = result.map(result => result.id);
            dispatch(new GetVehiclePositionsByIds(ids));
            debugger
        }
        )
    }
    @Action(GetVehicleTrackDetailsByIds)
    getVehicleTrackDetailsByIds({ patchState }: StateContext<VehiclesStateModel>, { vehicleIds }: GetVehicleTrackDetailsByIds) {
        this.vehicleService.getVehicleTrackDetailsByIds(vehicleIds).subscribe((result: VehicleTrackDetails[]) =>
            patchState({
                vehicleTrackDetails: result
            })
        )
    }
    @Action(GetVehiclePositionsByIds)
    getVehiclePositionsByIds({ patchState }: StateContext<VehiclesStateModel>, { vehicleIds }: GetVehiclePositionsByIds) {
        this.vehicleService.getVehiclePositionsByIds(vehicleIds).subscribe((result: VehiclePosition[]) =>
            patchState({
                vehiclePositions: result
            })
        )
    }
}
