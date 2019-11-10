

export interface Driver {
    name: string;
    speed: number;
    online: boolean;
    status: DriverStatus;
    remainingTime: number;
    lastUpdate: number;
}

export enum DriverStatus {
    resting = 0, driving = 1
}
