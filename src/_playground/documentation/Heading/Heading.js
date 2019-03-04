import CustomPropTypes from '../../../utils/CustomPropTypes/CustomPropTypes';
import { makeSafeId } from '../utils/makeSafeId';
import PropTypes from 'prop-types';
import React from 'react';

const Heading = ({ children, level }) => {
    return React.createElement(`h${level}`, { className: 'frDocs-Heading', id: makeSafeId(children) }, children);
};

Heading.propTypes = {
    children: PropTypes.string.isRequired,
    level: CustomPropTypes.range(1, 6).isRequired
};

export default Heading;
