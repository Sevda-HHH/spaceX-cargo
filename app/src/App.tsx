import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Swal from 'sweetalert2';
import './App.scss';
import { Header } from './Components/Header';
import { CompaniesSideBar } from './Components/SideBarCompanies';
import { Company } from './Components/SingleCompany';
import { IShipment } from './utils/interfaces/shipment';
import { getShipments, saveShipments } from './redux/actions/shipment';
import { LoaderSpinner } from './Components/Utils/LoaderSpinner';

function App() {

  const dispatch = useDispatch()
  const [searchInput, setSearchInput] = useState("")
  const [loaded, setLoaded] = useState(false)
  const shipments = useSelector((state: any) => state.data).filter((item: IShipment) => item.name.trim().toLowerCase().includes(searchInput.toLowerCase()))
  const state = useSelector((state: any) => state)
  const allShipments = useSelector((state: any) => state.data)

  const changeSearchInput = (word: string) => {
    setSearchInput(word)
  }

  const loadDataSetTrue = () => {
    setLoaded(true)
  }

  const saveChanges = () => {
    saveShipments(allShipments)
  }

  useEffect(() => {
    if (loaded) {
      dispatch(getShipments())
    } else {
      Swal.fire('Please click the "Load" button to load a set over the network')
    }
  }, [setSearchInput, loaded])


  return (
    <div className="App">
      <Header saveChanges={saveChanges} searchInput={searchInput} changeSearchInput={changeSearchInput} loadDataSetTrue={loadDataSetTrue} />

      <Router >
        <Fragment>
          <div className="d-flex  main">
            {(loaded && state.status === "IDLE") ? <LoaderSpinner /> : <CompaniesSideBar shipments={shipments} />}

            <Routes>
              <Route path="/company/:id" element={<Company shipments={shipments} />} />
            </Routes>
          </div>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
