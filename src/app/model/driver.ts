import { OnlineStatus } from './online';


export interface Driver extends OnlineStatus {
    name: string;
    speed: number;
    status: DriverStatus;
    remainingTime: number;
    lastUpdate: number;
}

export enum DriverStatus {
    resting = 0, driving = 1
}
