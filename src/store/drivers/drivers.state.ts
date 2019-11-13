import { Navigate } from '@ngxs/router-plugin';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Driver } from 'src/app/model/driver';
import { DriverFilter } from 'src/app/shared/filters/driver.filter';
import { ApplyDriversFilters, SelectDriver, GetAllDriver, GetDriverTrackDetailsByIds, UpdateDriverTrackDetails } from './actions';
import { DriversService } from 'src/app/services/drivers/drivers.service';
import { DriverTrackDetails } from 'src/app/model/driverTrackDetails';

export class DriversStateModel {
    selected: Driver;
    filter: DriverFilter;
    driverList: Driver[];
    driverTrackDetails: DriverTrackDetails[];
}

@State<DriversStateModel>({
    name: 'drivers',
    defaults: {
        selected: undefined,
        filter: new DriverFilter(),
        driverList: [],
        driverTrackDetails: []
    }
})
export class DriversState {

    constructor(private driverService: DriversService) { }

    @Selector()
    static selectedDriver(ctx: DriversStateModel) { return ctx.selected; }
    @Selector()
    static filter(ctx: DriversStateModel) { return ctx.filter; }
    @Selector()
    static driverList(ctx: DriversStateModel) { return ctx.driverList; }
    @Selector()
    static driverTrackDetails(ctx: DriversStateModel) { return ctx.driverTrackDetails; }

    @Action(SelectDriver)
    selectDriver({ dispatch, patchState }: StateContext<DriversStateModel>, { payload }: SelectDriver) {
        patchState({
            selected: payload
        });
        dispatch(new Navigate(['/driver']));
    }
    @Action(ApplyDriversFilters)
    applyFilters({ patchState }: StateContext<DriversStateModel>, { payload }: ApplyDriversFilters) {
        patchState({
            filter: payload
        });
    }
    @Action(GetAllDriver)
    getAllDriver({ patchState }: StateContext<DriversStateModel>) {
        this.driverService.getDriversObjects().subscribe(
            (result: Driver[]) => patchState({
                driverList: result
            })
        );
    }
    @Action(GetDriverTrackDetailsByIds)
    getDriverTrackDetailsByIds({ patchState, dispatch }: StateContext<DriversStateModel>, { driverIds }: GetDriverTrackDetailsByIds) {
        this.driverService.getDriverTrackDetails(driverIds).subscribe(
            (result: DriverTrackDetails[]) => {
                patchState({
                    driverTrackDetails: result
                })
                dispatch(UpdateDriverTrackDetails)
            }
        );
    }
    @Action(UpdateDriverTrackDetails)
    updateDriverTrackDetails({ patchState, getState }: StateContext<DriversStateModel>) {
        let driversCopy = getState().driverList;
        let trackCopy = getState().driverTrackDetails;
        driversCopy.forEach(driver => {
            driver.trackDetails = trackCopy.find(track => driver.id === track.DriverId)
        });
        patchState({
            driverList: driversCopy
        })
    }
}
