import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import React from 'react';

class SideNavList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children, className, hasParent, headingLevel, onItemSelect, open, selectedId, title, titleProps, ...rest } = this.props;
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

        const HeadingTag = `h${headingLevel}`;

        const sideNavList = (
            <ul
                {...rest}
                aria-expanded={hasParent && open}
                aria-hidden={hasParent && !open}
                className={sideNavListClasses}>
                {React.Children.toArray(children).map(child => {
                    return React.cloneElement(child, {
                        isSubItem: hasParent,
                        onItemSelect: onItemSelect,
                        selected: selectedId === child.props.id,
                        selectedId: selectedId
                    });
                })}
            </ul>
        );

        if (title && !hasParent) {
            return (
                <div
                    className={sideNavHeaderlasses}>
                    <HeadingTag {...titleProps} className='fd-side-nav__title'>
                        {title}
                    </HeadingTag>
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
    headingLevel: CustomPropTypes.range(2, 6),
    open: PropTypes.bool,
    selectedId: PropTypes.string,
    title: PropTypes.string,
    titleProps: PropTypes.object,
    onItemSelect: PropTypes.func
};

SideNavList.defaultProps = {
    headingLevel: 3
};

SideNavList.propDescriptions = {
    hasParent: '_INTERNAL USE ONLY._',
    open: '_INTERNAL USE ONLY._',
    selectedId: '_INTERNAL USE ONLY._',
    onItemSelect: '_INTERNAL USE ONLY._'
};

SideNavList.displayName = 'SideNav.List';

export default SideNavList;
