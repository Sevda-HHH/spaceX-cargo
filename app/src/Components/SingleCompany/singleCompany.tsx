import { Form } from 'react-bootstrap'
import { IShipment } from '../../utils/interfaces/shipment'
interface IProps {
    shipment: IShipment,
    bays: number,
    boxes: string,
    chanegInputValue: (val: string) => void
}
export const SingleCompany: React.FC<IProps> = (
    {
        shipment,
        bays,
        boxes,
        chanegInputValue
    }) => {

    return (
        <div className="col-lg-10">
            <h1>{shipment.name}</h1>
            <a href={`mailto:${shipment.email}`}>{shipment.email}</a>
            <p> Number of required bays <b>{(!bays) ? <></> : bays}</b> </p>
            <div>
                <h5>
                    Cargo Boxes
                </h5>
                <Form.Control type="text" value={boxes} onChange={(event: any) => chanegInputValue(event.target.value)} placeholder="Boxe massive" />
                {(!bays) && <p className="text-danger">please enter a number </p>}
            </div>
        </div>
    )
}
