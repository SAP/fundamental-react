import classnames from 'classnames';
import { Popover } from '../Popover/Popover';
import PropTypes from 'prop-types';
import React from 'react';

// ------------------------------------------- Menu ------------------------------------------
export const LocalizationEditor = ({ control, menu, id, compact, textarea, className, listProps, popoverProps, ...props }) => {

    const localizationEditorClasses = classnames(
        'fd-localization-editor',
        className
    );

    const localizationEditorCompactClasses = classnames(
        'fd-input-group',
        {
            'fd-input-group--compact': compact && !textarea
        },
        'fd-input-group--after'
    );

    const localizationEditorInputClasses = classnames(
        {
            'fd-input fd-input--compact': compact
        }
    );

    const localizationEditorTextareaClasses = classnames(
        'fd-input-group__addon',
        'fd-input-group__addon--after',
        'fd-input-group__addon--button',
        {
            'fd-input-group__addon--textarea': textarea
        }
    );

    const localizationEditorAddonClasses = classnames(
        'fd-input-group__addon',
        'fd-input-group__addon--after',
        {
            'fd-input-group__addon--textarea': textarea
        }
    );

    return (
        <div className={localizationEditorClasses} {...props}>
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
                                            className={localizationEditorCompactClasses}>
                                            {textarea ? (
                                                <textarea {...inputProps} />
                                            ) : (
                                                <input
                                                    {...inputProps}
                                                    className={localizationEditorInputClasses}
                                                    placeholder={placeholder}
                                                    type='text' />
                                            )}
                                            <span
                                                className={localizationEditorAddonClasses}>
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
                            className={localizationEditorCompactClasses}>
                            {textarea ? (
                                <textarea {...control.inputProps} />
                            ) : (
                                <input
                                    {...control.inputProps}
                                    className={localizationEditorInputClasses}
                                    placeholder={control.placeholder}
                                    type='text' />
                            )}
                            <span
                                className={localizationEditorTextareaClasses}>
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
