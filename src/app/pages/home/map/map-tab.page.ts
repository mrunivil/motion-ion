import { Component, ViewChild, ElementRef, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { MapState } from 'src/store/map/map.state';
import { Observable, Subject } from 'rxjs';
import { ToggleAutoRefresh } from 'src/store/map/actions';
import { VehiclesState } from 'src/store/vehicles/vehicles.state';
import { VehiclePosition } from 'src/app/model/vehiclePosition';
import { GetAllVehiclePositions } from 'src/store/vehicles/actions';
import { takeUntil } from 'rxjs/operators';
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
        this.store.dispatch(new GetAllVehiclePositions());
    }
    ngOnDestroy(): void {
        this.alive.complete();
    }

    toggleAutorefresh() {
        this.store.dispatch(new ToggleAutoRefresh());
    }

    toggleFilter() { }

    ngAfterViewInit() {
        this.vehiclePositions$.pipe(
            takeUntil(this.alive)
        ).subscribe(
            (pos) => {
                if (pos.length > 0) {

                    const coord = { lat: pos[0].Latitude, lng: pos[0].Longitude };

                    var icon = new H.map.Icon('assets/icon/favicon.png');
                    this.platform = new H.service.Platform({
                        apikey: 'guQQwicU7quqkL5j1Mn1q917Js7XxEvYH6HJ1-fwRQs'
                    });
                    const defaultLayers = this.platform.createDefaultLayers();

                    const map = new H.Map(
                        this.mapElement.nativeElement,
                        defaultLayers.vector.normal.map, {
                        center: coord,
                        zoom: 7,
                        pixelRatio: window.devicePixelRatio || 1
                    }
                    );
                    window.addEventListener('resize', () => map.getViewPort().resize());
                    var mapEvents = new H.mapevents.MapEvents(map);
                    var behavior = new H.mapevents.Behavior(mapEvents);
                    var ui = H.ui.UI.createDefault(map, defaultLayers);
                    this.startClustering(map, pos);
                }
            }
        )
    }

    startClustering(map, data) {
        var dataPoints = data.map(function (item) {
            var xyz =  new H.clustering.DataPoint(item.Latitude, item.Longitude, 1, item); 
            return xyz;
        });
        var clusteredDataProvider = new H.clustering.Provider(dataPoints, {
            clusteringOptions: {
                eps: 64,
                minWeight: 2
            }
        });
        var clusteringLayer = new H.map.layer.ObjectLayer(clusteredDataProvider);
        map.addLayer(clusteringLayer);
        clusteredDataProvider.addEventListener('tap', function(event) {
            console.log(event.target.getData().a.data.VRN)
          });
    }
}