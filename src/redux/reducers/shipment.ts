import { SHIPMENT_ACTIONS } from "../../utils/enums/shipment"
import { IAction } from "../../utils/interfaces/actions"
import { IShipmentState } from "../../utils/interfaces/shipment"

const initialStateShipment: IShipmentState = {
    error: null,
    data: [],
    status: "IDLE"
}

export const shipmentReducer = (state = initialStateShipment, action: IAction) => {
    switch (action.type) {
        case `${SHIPMENT_ACTIONS.UPDATE_SHIPMENTS}_SUCCESS`:
            let newData = [...state.data]
            const index = newData.findIndex(d => d.id === action._id)
            newData[index].boxes = action.payload
            return {
                ...state,
                error: null,
                data: newData,
                status: "SUCCESS"
            }

        case `${SHIPMENT_ACTIONS.UPDATE_SHIPMENTS}_ERROR`:
            return {
                ...state,
                data: {},
                error: action.payload,
                status: "ERROR"
            }

        case `${SHIPMENT_ACTIONS.GET_SHIPMENTS}_SUCCESS`:
            return {
                ...state,
                error: null,
                data: action.payload,
                status: "SUCCESS"
            }

        case `${SHIPMENT_ACTIONS.GET_SHIPMENTS}_ERROR`:
            return {
                ...state,
                data: [],
                error: action.payload,
                status: "ERROR"
            }

        default:
            return state
    }
}