import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import loader from "../Images/LoaderImage.gif"


function Loader(){
    const isLoading = useSelector(state => state.loaderReducerSlice.isLoading);
    return (

        <div>
            {
                isLoading && 
                <div className="loader">
                    <img className='loaderSize' src={loader} alt='loaderImage'/>
                    </div>}
                </div>
    )
}

export default Loader