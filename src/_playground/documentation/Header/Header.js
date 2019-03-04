import PropTypes from 'prop-types';
import React from 'react';

const Header = (props) => {
    const { children } = props;

    return (
        <React.Fragment>
            <h1 className='frDocs-Content__header'>
                {children}
            </h1>
        </React.Fragment>
    );
};

Header.propTypes = {
    children: PropTypes.node
};

export default Header;
