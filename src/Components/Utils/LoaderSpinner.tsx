import { Spinner } from 'react-bootstrap'

export const LoaderSpinner = () => {
    return (
        <Spinner className="" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    )
}