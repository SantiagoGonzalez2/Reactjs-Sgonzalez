import './Welcome.css'

import { Link } from "react-router-dom";


const Welcome = () => {

    return (
        <div className='init'>
            <h1>
                WELCOME 
                <br />
                Rick And Morty
                <br />
                Store
            </h1>

            <Link className='goinit' to={'/products'}>START</Link>

        </div>
    )
}

export default Welcome