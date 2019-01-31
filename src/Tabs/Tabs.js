import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export const Tab = props => {
    const { children, className, content, disabled, id, onClick, selectedTab, tabContentProps, tabLinkProps, url, ...rest } = props;

    const renderLink = () => {
        if (url) {
            return (
                <a
                    {...tabLinkProps}
                    aria-disabled={disabled}
                    className={className}
                    disabled={disabled}
                    href={url}
                    onClick={(e) => {
                        if (!disabled && onClick) {
                            onClick(e);
                        }
                    }}>
                    {children}
                </a>
            );
        } else if (children && React.isValidElement(children)) { //TODO: This is not all the needed props
            return React.cloneElement(children, {
                ...tabLinkProps,
                'aria-disabled': disabled,
                className: className,
                disabled: disabled,
                onClick: (e) => {
                    if (!disabled && onClick) {
                        onClick(e);
                    }
                }
            });
        } else if (children) {
            return children;
        }
    };

    return (
        <li {...rest}
            className='fd-tabs__item'
            key={id} >
            {renderLink()}
            {selectedTab === id ? (
                <p {...tabContentProps} className='fd-tabs__content'>{content}</p>
            ) : null}
        </li>
    );
};

Tab.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string
};

export class TabComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTab: '1'
        };
    }

    handleTabSelection = (e, id) => {
        this.setState({ selectedTab: id });
    };

    getLinkClasses = (id, className) => {
        return classnames(
            className,
            'fd-tabs__link',
            {
                'is-selected': this.state.selectedTab === id
            }
        );
    }

    renderTabs = (children) => {
        return React.Children.map(children, (child) => {
            const classes = this.getLinkClasses(child.props.id, child.props.className);
            return React.cloneElement(child, {
                selectedTab: this.state.selectedTab,
                className: classes,
                onClick: (e) => {
                    child.props.onClick && child.props.onClick(e);
                    this.handleTabSelection(e, child.props.id);
                }
            });
        });
    }

    render() {
        const { ids, children, className, tabProps, tabLinkProps, tabContentProps, ...rest } = this.props;

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

TabComponent.propTypes = {
    className: PropTypes.string
};

TabComponent.propDescriptions = {
    ids: 'An array of objects with keys \'id\', \'url\', \'name\', \'hasChild\', \'child\', and \'glyph\' defining each tab.'
};
