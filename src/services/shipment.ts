import { HttpClient } from '../HttpClient'

class ShipmentServices extends HttpClient {

    constructor() {
        super("https://619f56f01ac52a0017ba472f.mockapi.io/App");
    }

    getShipments() {
        return this.get()
    }
}

export const shipmentServices = new ShipmentServices();
