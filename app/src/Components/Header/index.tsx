import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { SearchInput } from './searchInput'
import logo from '../../assets/img/logo.png'
import './header.scss'

interface IProps {
    searchInput: string,
    changeSearchInput: (word: string) => void,
    loadDataSetTrue: () => void,
    saveChanges: () => void
}

export const Header: React.FC<IProps> = ({ saveChanges, changeSearchInput, searchInput, loadDataSetTrue }) => {
    return (<>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/"><img id="logo" src={logo} alt="SpaceX" /> Cargo Planner</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav ">
                    <Nav className="loadSaveDesktop ms-auto justify-content-end ">
                        <SearchInput changeSearchInput={changeSearchInput} searchInput={searchInput} />
                        <Button onClick={loadDataSetTrue} variant="primary" className="px-5  ">Load</Button>
                        <Button onClick={saveChanges} variant="secondary" className="px-5 ">Save </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <div className="loadSaveMobile    justify-content-around">
            <SearchInput changeSearchInput={changeSearchInput} searchInput={searchInput} />
            <Button onClick={loadDataSetTrue} variant="primary" className="px-5 col-5 col-md-3  col-sm-3 ">Load</Button>
            <Button onClick={saveChanges} variant="secondary" className="px-5 col-5 col-md-3   col-sm-3  ">Save </Button>
        </div>
    </>)
}