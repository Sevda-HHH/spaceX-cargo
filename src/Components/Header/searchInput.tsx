import React from 'react'
import { Form, FormControl } from 'react-bootstrap'
import searchIcon from '../../assets/img/searchIcon.svg'

interface IProps {
    searchInput: string,
    changeSearchInput: (word: string) => void
}

export const SearchInput: React.FC<IProps> = ({ changeSearchInput, searchInput }) => {
    return (
        <div>
            <Form className="d-flex searchInput">
                <FormControl
                    type="search"
                    placeholder="Company Name"
                    className="me-2"
                    value={searchInput}
                    onChange={(evt) => changeSearchInput(evt.target.value)}
                />
                <img className="searchSubmitButton" src={searchIcon} />
            </Form>
        </div>
    )
}
