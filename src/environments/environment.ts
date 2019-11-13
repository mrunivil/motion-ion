// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    apikey: 'guQQwicU7quqkL5j1Mn1q917Js7XxEvYH6HJ1-fwRQs'
};

const BASE_URL = 'http://localhost:3000/api/';

export const urls = {
    // will not work on prod
    // GET_ALL_DRIVER: BASE_URL_LOCAL + "drivers",
    // GET_ALL_SITES: BASE_URL_LOCAL + "sites",
    // GET_ALL_VEHICLE: BASE_URL_LOCAL + "vehicles",

    // will not work on local
    GET_ALL_DRIVER: BASE_URL + 'planner/api/getDrivers',
    GET_ALL_SITES: BASE_URL + 'planner/api/getAllSites',
    GET_ALL_VEHICLE: BASE_URL + 'planner/api/getVehicles',
    GET_VEHICLE_POSITION_BY_IDS: (vehicleIds: number[]) => `${BASE_URL}outbound/api/getVehiclePosisitions2/[${vehicleIds}]`,
    GET_VEHICLE_TRACK_DETAILS_BY_IDS: (vehicleIds: number[]) => `${BASE_URL}outbound/api/getVehicleTrackDetails2/[${vehicleIds}]`,
    GET_DRIVER_TRACK_DETAILS_BY_IDS: (driverIds: number[]) => `${BASE_URL}outbound/api/getDriverTrackDetails2/[${driverIds}]`,
};
