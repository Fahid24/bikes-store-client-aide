import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div className=' d-flex justify-content-center mt-5 sticky-bottom py-3 align-items-center bg-dark text-white'>
            <small>Copyright © {year} </small>
        </div>
    );
};

export default Footer;