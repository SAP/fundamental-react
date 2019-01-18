import { Popover } from '../Popover/Popover';
import PropTypes from 'prop-types';
import React from 'react';

// ------------------------------------------- Menu ------------------------------------------
export const LocalizationEditor = ({ control, menu, id, compact, textarea, className, listProps, popoverProps, ...props }) => {

    return (
        <div className={`fd-localization-editor${className ? ' ' + className : ''}`} {...props}>
            <Popover
                {...popoverProps}
                body={
                    <nav className='fd-menu'>
                        <ul {...listProps} className='fd-menu__list fd-localization-editor__list'>
                            {menu.map((item, index) => {
                                let {
                                    inputProps,
                                    language,
                                    placeholder,
                                    ...itemProps
                                } = item;

                                return (
                                    <li {...itemProps} key={index}>
                                        <div
                                            className={`fd-input-group${
                                                compact && !textarea ? ' fd-input-group--compact' : ''
                                            } fd-input-group--after`}>
                                            {textarea ? (
                                                <textarea {...inputProps} />
                                            ) : (
                                                <input
                                                    {...inputProps}
                                                    className={
                                                        compact ? 'fd-input fd-input--compact' : ''
                                                    }
                                                    placeholder={placeholder}
                                                    type='text' />
                                            )}
                                            <span
                                                className={`fd-input-group__addon fd-input-group__addon--after${
                                                    textarea ? ' fd-input-group__addon--textarea' : ''
                                                }`}>
                                                {language}
                                            </span>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                }
                control={
                    <div>
                        <label
                            {...control.labelProps}
                            className='fd-form__label'
                            htmlFor={id}>
                            {control.label}
                        </label>
                        <div
                            className={`fd-input-group${
                                compact && !textarea ? ' fd-input-group--compact' : ''
                            } fd-input-group--after`}>
                            {textarea ? (
                                <textarea {...control.inputProps} />
                            ) : (
                                <input
                                    {...control.inputProps}
                                    className={compact ? 'fd-input fd-input--compact' : ''}
                                    placeholder={control.placeholder}
                                    type='text' />
                            )}
                            <span
                                className={`fd-input-group__addon fd-input-group__addon--after fd-input-group__addon--button${
                                    textarea ? ' fd-input-group__addon--textarea' : ''
                                }`}>
                                <button {...control.buttonProps} className='fd-button--light fd-localization-editor__button'>
                                    {control.language}
                                </button>
                            </span>
                        </div>
                    </div>
                }
                id={id}
                noArrow />
        </div>
    );
};

LocalizationEditor.propTypes = {
    control: PropTypes.shape({
        buttonProps: PropTypes.object,
        inputProps: PropTypes.object,
        labelProps: PropTypes.object,
        label: PropTypes.string,
        placeholder: PropTypes.string,
        language: PropTypes.string
    }).isRequired,
    menu: PropTypes.arrayOf(
        PropTypes.shape({
            inputProps: PropTypes.object,
            placeholder: PropTypes.string,
            language: PropTypes.string
        }).isRequired
    ).isRequired,
    className: PropTypes.string,
    compact: PropTypes.bool,
    id: PropTypes.string,
    listProps: PropTypes.object,
    popoverProps: PropTypes.object,
    textarea: PropTypes.bool
};
