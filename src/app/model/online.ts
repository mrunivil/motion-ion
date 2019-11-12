export class OnlineStatus {
    online: boolean;

    constructor(status:string){
        this.online = (status === "online") ? true : false;
    }
}
