import React from 'react'
import { Link } from 'react-router-dom'
import { IShipment } from '../../utils/interfaces/shipment'
import './companiesSideBar.scss'

interface IProps {
    shipments: Array<IShipment>
}

export const CompaniesSideBar: React.FC<IProps> = ({ shipments }) => {
    return (
        <section id="CompaniesSideBar" className="col-lg-3 col-md-4 col-sm-5">
            <div className="content text-start ">
                <div className="row">
                    {(shipments !== null && shipments !== undefined) && shipments.map(company => {
                        return <Link to={`company/${company.id}`}>{company.name}</Link>
                    })}
                </div>
            </div>
        </section>
    )
}

