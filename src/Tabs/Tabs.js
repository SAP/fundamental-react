import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export const Tab = props => {
    const { children, className, content, disabled, id, onClick, selected, tabContentProps, tabLinkProps, url, ...rest } = props;

    const linkClasses = classnames(
        className,
        'fd-tabs__link',
        {
            'is-selected': selected
        }
    );

    const renderLink = () => {
        if (url) {
            return (
                <a
                    {...tabLinkProps}
                    aria-disabled={disabled}
                    className={linkClasses}
                    disabled={disabled}
                    href={url}
                    onClick={(e) => {
                        if (!disabled) {
                            onClick(e);
                        }
                    }}>
                    {children}
                </a>
            );
        } else if (children && React.isValidElement(children)) {
            return React.cloneElement(children, {
                ...tabLinkProps,
                'aria-disabled': disabled,
                className: linkClasses,
                disabled: disabled,
                onClick: (e) => {
                    if (!disabled) {
                        onClick(e);
                    }
                }
            });
        } else if (children) {
            return children;
        }
    };

    const tabClasses = classnames('fd-tabs__item', className);

    return (
        <li {...rest}
            className={tabClasses}
            key={id} >
            {renderLink()}
            {selected ? (
                <p {...tabContentProps} className='fd-tabs__content'>{content}</p>
            ) : null}
        </li>
    );
};
Tab.displayName = 'Tab';

Tab.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    content: PropTypes.node,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    selected: PropTypes.bool,
    tabContentProps: PropTypes.object,
    tabLinkProps: PropTypes.object,
    url: PropTypes.string,
    onClick: PropTypes.func
};

Tab.defaultProps = {
    onClick: () => { }
};

Tab.propDescriptions = {
    children: 'Can be link text, an achor tag, or a react component like React Routers\'s `Link`.',
    content: 'Content to render when tab is selected.',
    selected: 'Set to **true** to mark tab as selected.',
    url: 'Creates an internal anchor when a child anchor is not provided.',
    tabContentProps: 'Additional props to be spread to the tab content\'s <p>` element.',
    tabLinkProps: 'Additional props to be spread to the tab\'s link element.'
};

export class TabGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedId: this.props.selectedId
        };
    }

    handleTabSelection = (e, id) => {
        this.setState({ selectedId: id });
    };

    renderTabs = (children) => {
        return React.Children.map(children, (child) => {

            return React.cloneElement(child, {
                selected: this.state.selectedId === child.props.id,
                onClick: (e) => {
                    child.props.onClick && child.props.onClick(e);
                    this.handleTabSelection(e, child.props.id);
                }
            });
        });
    }

    render() {
        const { children, className, selectedId, ...rest } = this.props;

        const tabClasses = classnames(
            'fd-tabs',
            className
        );

        return (
            <ul {...rest} className={tabClasses}>
                {this.renderTabs(children)}
            </ul>
        );
    }
}
TabGroup.displayName = 'TabGroup';

TabGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    selectedId: PropTypes.string
};

TabGroup.propDescriptions = {
    children: 'One or more `Tab` components to render within the component.',
    selectedId: 'The `id` of the selected `Tab`.'
};
