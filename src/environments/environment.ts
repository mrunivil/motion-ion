// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apikey: "guQQwicU7quqkL5j1Mn1q917Js7XxEvYH6HJ1-fwRQs"
};

const BASE_URL = "http://localhost:3000/api/";

export const urls = {
  GET_ALL_DRIVER: BASE_URL + "drivers",
  GET_DRIVER_BY_ID: (id: number) => `${BASE_URL}drivers/${id}`,
  GET_ALL_SITES: BASE_URL + "sites",
  GET_SITE_BY_ID: (id: number) => `${BASE_URL}sites/${id}`,
  GET_ALL_VEHICLE: BASE_URL + "vehicles",
  GET_VEHICLE_BY_ID: (id: number) => `${BASE_URL}vehicles/${id}`,
  GET_VEHICLE_POSITION: BASE_URL + "vehiclePositions2",
  GET_VEHICLE_POSITION_BY_ID: (id: number) => `${BASE_URL}vehiclePositions2/${id}`,
  GET_VEHICLE_TRACK_DETAILS: BASE_URL + "vehicleTrackDetails",
  GET_VEHICLE_TRACK_DETAILS_BY_ID: (id: number) => `${BASE_URL}vehicleTrackDetails/${id}`,
  GET_DRIVER_TRACK_DETAILS: BASE_URL + "driverTrackDetails",
  GET_DRIVER_TRACK_DETAILS_BY_ID: (id: number) => `${BASE_URL}driverTrackDetails/${id}`,
}
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
