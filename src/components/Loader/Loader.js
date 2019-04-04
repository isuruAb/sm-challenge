import React from 'react';
import loader from '../../assets/loader.gif'
import './Loader.css'
const Loader = () => {
    return (
        <div className="loader_wrapper" >
            <img src={loader} alt="loader" />
        </div>
    )
}
export default Loader;