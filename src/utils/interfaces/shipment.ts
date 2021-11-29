export interface IShipment {
    id: string,
    name: string,
    email: string,
    boxes: string | null
}
export interface IShipmentState {
    error: null | string,
    data: Array<IShipment> | any,
    status: string
}