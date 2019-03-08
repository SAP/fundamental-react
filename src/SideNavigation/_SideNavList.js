import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

class SideNavList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children, className, hasParent, onItemSelect, open, selectedId, title, titleProps, ...rest } = this.props;
        const sideNavListClasses = classnames({
            'fd-side-nav__list': !hasParent,
            'fd-side-nav__sublist': hasParent
        },
        className
        );

        const sideNavHeaderlasses = classnames(
            'fd-side-nav__group',
            className
        );

        const sideNavList = (
            <ul
                {...rest}
                aria-expanded={hasParent && open}
                aria-hidden={hasParent && !open}
                className={sideNavListClasses}>
                {React.Children.map(children, (child) => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, {
                            isSubItem: hasParent,
                            onItemSelect: onItemSelect,
                            selected: selectedId === child.props.id,
                            selectedId: selectedId
                        });
                    } else {
                        return child;
                    }
                })}
            </ul>
        );

        if (title && !hasParent) {
            return (
                <div
                    className={sideNavHeaderlasses}>
                    <h1 {...titleProps} className='fd-side-nav__title'>
                        {title}
                    </h1>
                    {sideNavList}
                </div>
            );
        }

        return sideNavList;
    }
}

SideNavList.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    hasParent: PropTypes.bool,
    open: PropTypes.bool,
    selectedId: PropTypes.string,
    title: PropTypes.string,
    titleProps: PropTypes.object,
    onItemSelect: PropTypes.func
};

SideNavList.propDescriptions = {
    hasParent: '_INTERNAL USE ONLY._',
    open: '_INTERNAL USE ONLY._',
    selectedId: '_INTERNAL USE ONLY._',
    onItemSelect: '_INTERNAL USE ONLY._'
};

SideNavList.displayName = 'SideNav.List';

export default SideNavList;
