import Header from './documentation/Header/Header';
import { Link } from 'react-router-dom';
import React from 'react';

const RouteNotFound = () => (
    <div>
        <Header>Sorry, page not found.</Header>
        <Link to=''>Home</Link>
    </div>
);

RouteNotFound.displayName = 'RouteNotFound';

export default RouteNotFound;
