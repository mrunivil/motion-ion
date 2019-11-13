import { Component, ViewChild, ElementRef, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { MapState } from 'src/store/map/map.state';
import { Observable, of, Subject } from 'rxjs';
import { ToggleAutoRefresh } from 'src/store/map/actions';
import { VehiclesState } from 'src/store/vehicles/vehicles.state';
import { VehiclePosition } from 'src/app/model/vehiclePosition';
import { GetAllVehicles, GetVehiclePositionsByIds } from 'src/store/vehicles/actions';
import { map, takeUntil, takeWhile, switchMap } from 'rxjs/operators';
import { Vehicle } from 'src/app/model/vehicle';

declare let H: any;

@Component({
    selector: 'app-map-tab',
    templateUrl: 'map-tab.page.html',
    styleUrls: ['map-tab.page.scss']
})
export class MapTabPage implements AfterViewInit, OnInit, OnDestroy {

    private alive = new Subject();
    @Select(MapState.autoRefresh) autorefresh$: Observable<boolean>;
    @Select(VehiclesState.vehiclePostions) vehiclePositions$: Observable<VehiclePosition[]>;
    @Select(VehiclesState.vehicleList) vehicleList$: Observable<Vehicle[]>;

    @ViewChild('map', { static: true })
    mapElement: ElementRef;


    private platform: any;
    constructor(private store: Store) {
    }

    ngOnInit(): void {
        this.store.dispatch(new GetAllVehicles());
    }
    ngOnDestroy(): void {
       this.alive.complete();
    }

    toggleAutorefresh(event: CustomEvent) {
        this.store.dispatch(new ToggleAutoRefresh());
    }

    toggleFilter() { }

    ngAfterViewInit() {
        this.platform = new H.service.Platform({
            apikey: 'guQQwicU7quqkL5j1Mn1q917Js7XxEvYH6HJ1-fwRQs'
        });
        const defaultLayers = this.platform.createDefaultLayers();
        const map = new H.Map(
            this.mapElement.nativeElement,
            defaultLayers.vector.normal.map,
            {
                zoom: 10,
                center: { lat: 50, lng: 50 }
            }
        );
        const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    }
}
