import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MapState } from 'src/app/state/map_state/mapstate.state';
import { environment } from 'src/environments/environment';
import { ToggleMapInteractivityAction as ToggleMapInteractivityAction } from 'src/app/state/map_state/mapstate.actions';
import { take } from 'rxjs/operators';

declare var H: any;

@Component({
  selector: "app-here-map",
  templateUrl: "./here-map.component.html",
  styleUrls: ["./here-map.component.scss"]
})
export class HereMapComponent implements OnInit, AfterViewInit {

  @Select(MapState.isInteractive) isInteractive$: Observable<boolean>;

  @ViewChild("mapContainer", { static: true })
  public mapElement: ElementRef;
  @Input()
  public lat: number;
  @Input()
  public lng: number;
  @Input()
  public width: number;
  @Input()
  public height: number;
  @Input()
  public zoom: number;
  @Input()
  public interactive: boolean;

  platform: any;
  map: any;
  defaultLayers: any;
  behavior: any;
  ui: any;
  public constructor(public store: Store) {

  }

  toggleInteractivity() {
    this.store.dispatch(new ToggleMapInteractivityAction).pipe(take(1));
  }

  ngAfterViewInit() {

    this.defaultLayers = this.platform.createDefaultLayers();
    this.map = new H.Map(
      this.mapElement.nativeElement,
      this.defaultLayers.vector.normal.map,
      {
        zoom: 10,
        center: { lat: this.lat, lng: this.lng }
      }

    );
    this.ui = H.ui.UI.createDefault(this.map, this.defaultLayers);
    let mapEvents = new H.mapevents.MapEvents(this.map);
    this.behavior = new H.mapevents.Behavior(mapEvents);

    this.isInteractive$.subscribe(interactive => {

     this.ui.getControl('zoom').setVisibility(interactive);
     this.ui.getControl('mapsettings').setVisibility(interactive);
     this.ui.getControl('scalebar').setVisibility(interactive);

      if (!interactive) {
        this.behavior.disable();
      } else {
        this.behavior.enable();
      }
    });
  }

  public ngOnInit() {
    this.platform = new H.service.Platform(
      {
        apikey: environment.apikey,
        useCIT: false,
        useHTTPS: true
      }
    );
  }
}
