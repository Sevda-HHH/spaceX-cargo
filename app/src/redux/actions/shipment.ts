import { Dispatch } from "redux";
import { shipmentServices } from "../../services/shipment";
import { SHIPMENT_ACTIONS } from "../../utils/enums/shipment";

export function getShipments() {
    return async function (dispatch: Dispatch) {
        const storage = localStorage.getItem("shipments")
        if (storage == null || storage == "[]") {
            const shipments = await shipmentServices.getShipments()
                .then(res => res.data)
                .catch(err => dispatch({
                    type: `${SHIPMENT_ACTIONS.GET_SHIPMENTS}_ERROR`,
                    payload: err
                }));
            await localStorage.setItem('shipments', JSON.stringify(shipments))
        }

        const pay: any = localStorage.getItem('shipments')

        dispatch({
            type: `${SHIPMENT_ACTIONS.GET_SHIPMENTS}_SUCCESS`,
            payload: JSON.parse(pay)
        })

    }
}

export function updateShipments(data: string, id: string | undefined) {
    return async function (dispatch: Dispatch) {
        dispatch({
            type: `${SHIPMENT_ACTIONS.UPDATE_SHIPMENTS}_SUCCESS`,
            payload: data,
            _id: id
        })
    }
}

export const saveShipments = async (data: Array<any>) => {
    await localStorage.clear()
    localStorage.setItem('shipments', JSON.stringify(data))
}