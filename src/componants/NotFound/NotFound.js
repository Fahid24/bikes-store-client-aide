import React from 'react';
import img from '../img/wordpress-404-error.jpg'

const NotFound = () => {
    return (
        <div className=' text-center text-danger'>

            <h1>Upss page dosen't found <br></br> Error 404 </h1>
            <img src={img} alt="" />
        </div>
    );
};

export default NotFound;