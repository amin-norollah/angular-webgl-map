import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 18,
        mapId: '90f87356969d889c',
        tilt: 45,
        heading: 90,
      }
    );

    let heading = 90;
    setInterval(() => {
      heading = (heading + 10) % 360;
      map.setHeading(heading);
    }, 100);
  }
}
