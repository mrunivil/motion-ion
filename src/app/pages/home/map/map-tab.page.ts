import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { MapState } from 'src/store/map/map.state';
import { Observable } from 'rxjs';
import { ToggleAutoRefresh } from 'src/store/map/actions';

declare let H: any;

@Component({
    selector: 'app-map-tab',
    templateUrl: 'map-tab.page.html',
    styleUrls: ['map-tab.page.scss']
})
export class MapTabPage implements AfterViewInit {

    @Select(MapState.autoRefresh) autorefresh$: Observable<boolean>;

    @ViewChild('map', { static: true })
    mapElement: ElementRef;


    private platform: any;
    constructor(private store: Store) {
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
