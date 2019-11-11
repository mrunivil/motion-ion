import { OnlineStatus } from './online';

export interface Vehicle extends OnlineStatus {
    name: string;
    speed: number;
    status: VehicleStatus;
    remainingTime: number;
    lastUpdate: number;
}

export enum VehicleStatus {
    resting, driving
}
