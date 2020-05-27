import Checkbox from '../Forms/Checkbox';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const ListSelection = ({
    className,
    children,
    onChange,
    ...props
}) => {

    const ListSelectionClasses = classnames(
        'fd-form-item',
        'fd-list__form-item',
        className
    );

    return (
        <>
            <div {...props} className={ListSelectionClasses}>
                <Checkbox inline onChange={onChange} />
            </div>
            {children}
        </>
    );
};

ListSelection.displayName = 'List.Selection';

ListSelection.propTypes = {
    /** Node(s) to render within the component */
    children: PropTypes.node,
    /** CSS class(es) to add to the element */
    className: PropTypes.string,
    /** Callback function when the change event fires on the Checkbox component */
    onChange: PropTypes.func
};

export default ListSelection;
