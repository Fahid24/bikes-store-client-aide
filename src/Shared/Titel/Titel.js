import React from 'react';
import { Helmet } from 'react-helmet-async';

const Titel = ({ title }) => {
    return (
        <Helmet title={title}>
            <title>{title} -Cool bike </title>
        </Helmet>
    );
};

export default Titel;