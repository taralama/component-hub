declare module 'leaflet-routing-machine' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  import * as L from 'leaflet';
  export {};
}

declare namespace L {
  namespace Routing {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function control(options: any): any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function waypoint(latLng: L.LatLng): any;
  }
}
