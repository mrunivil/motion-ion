export interface OSMLocation {
    _id?: string,
    Latitude?: number,
    Longitude?: number,
    Altitude?: number,
    Country?: string,
    State?: string,
    District?: string,
    City?: string,
    Zip?: string,
    Street?: string,
    StreetRef?: string,
    StreetType?: number,
    MaxSpeedInt?: number,
    MaxSpeed?: string,
    HouseNr?: string
}
export interface MapLocation {
    lat?: number,
    lng?: number
}