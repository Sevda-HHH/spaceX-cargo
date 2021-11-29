import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { IShipment } from '../../utils/interfaces/shipment'
import { updateShipments } from '../../redux/actions/shipment'
import { SingleCompany } from './singleCompany'
import './company.scss'

interface IProps {
    shipments: Array<any>
}

export const Company: React.FC<IProps> = ({ shipments }) => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const shipment: IShipment = (shipments !== null && shipments !== undefined) && shipments.find(shipment => shipment.id === id)
    const [boxes, setBoxes] = useState<any>(shipment?.boxes)
    const countBays = (boxes: string | null) => {
        if (boxes === null || boxes === undefined) {
            if (Number(boxes) < 1 && Number(boxes) !== 0) {
                return 1
            } else {
                return 0
            }
        }
        else {
            const array = boxes.split(',').map(function (item) {
                return Number(item);
            });
            const sum = array.reduce((previousValue: any, currentValue: any) => previousValue + currentValue)
            const bays = Math.round(sum / 10)
            if ((sum / 10) > 0 && bays < 1) {
                return 1
            } else {
                return bays
            }
        }
    }

    const [bays, setBays] = useState<number>(countBays(boxes))

    const chanegInputValue = async (newVal: any) => {
        await updateShipments(newVal, shipment.id)(dispatch)
        await setBoxes(newVal)

        shipment !== undefined && boxes !== undefined && (
            setBays(countBays(boxes))
        );
    }

    useEffect(() => {
        (shipment !== undefined && boxes !== undefined) && (
            setBays(countBays(boxes))
        );
        setBoxes(shipment?.boxes)
    }, [shipment, id, boxes])


    return (
        <section id="company" className="col-sm-6 col-lg-4 col-md-8 d-flex justify-content-center text-start">
            {(shipment !== undefined && shipment !== null)
                && (boxes !== null
                    ? (<SingleCompany boxes={boxes} chanegInputValue={chanegInputValue} bays={bays} shipment={shipment} />)
                    : (<SingleCompany boxes={"0"} chanegInputValue={chanegInputValue} bays={bays} shipment={shipment} />))
            }
        </section>
    )
}
