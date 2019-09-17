import 'fundamental-styles/dist/input-group.css'; //remove when replaced with InputGroup component
import 'fundamental-styles/dist/localization-editor.css';
import Button from '../Button/Button';
import classnames from 'classnames';
import FormInput from '../Forms/FormInput';
import FormLabel from '../Forms/FormLabel';
import FormTextArea from '../Forms/FormTextarea';
import Menu from '../Menu/Menu';
import Popover from '../Popover/Popover';
import PropTypes from 'prop-types';
import React from 'react';


const LocalizationEditor = ({ control, menu, id, compact, textarea, className, inputClassName, listProps, popoverProps, ...props }) => {

    const localizationEditorClasses = classnames(
        'fd-localization-editor',
        className
    );

    const localizationInputClasses = classnames(
        'fd-input-group__input',
        inputClassName
    );

    return (
        <div {...props} className={localizationEditorClasses}>
            <FormLabel
                {...control.labelProps}
                htmlFor={id}>
                {control.label}
            </FormLabel>
            <Popover
                {...popoverProps}
                body={
                    <Menu>
                        <Menu.List {...listProps}>
                            {menu.map((item, index) => {
                                let {
                                    inputProps,
                                    language,
                                    placeholder,
                                    ...itemProps
                                } = item;

                                return (
                                    <li {...itemProps}
                                        className='fd-menu__item'
                                        key={index}>
                                        <div className='fd-input-group fd-input-group--after'>
                                            {textarea ? (
                                                <FormTextArea className={localizationInputClasses} {...inputProps} />
                                            ) : (
                                                <FormInput
                                                    {...inputProps}
                                                    className={localizationInputClasses}
                                                    compact={compact}
                                                    placeholder={placeholder} />
                                            )}
                                            <span
                                                className='fd-input-group__addon fd-input-group__addon--button'>
                                                <Button
                                                    compact={compact}
                                                    option='light'>
                                                    {language}
                                                </Button>

                                            </span>
                                        </div>
                                    </li>
                                );
                            })}
                        </Menu.List>
                    </Menu>
                }
                control={
                    <div className='fd-input-group fd-input-group--after'>
                        {textarea ? (
                            <FormTextArea
                                {...control.inputProps}
                                className={localizationInputClasses}
                                compact={compact} />
                        ) : (
                            <FormInput
                                {...control.inputProps}
                                className={localizationInputClasses}
                                compact={compact}
                                placeholder={control.placeholder} />
                        )}
                        <span
                            className='fd-input-group__addon fd-input-group__addon--button'>
                            <Button
                                {...control.buttonProps}
                                compact={compact}
                                option='light'>
                                {control.language}
                            </Button>
                        </span>
                    </div>
                }
                id={id}
                noArrow />
        </div>
    );
};

LocalizationEditor.displayName = 'LocalizationEditor';

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
    inputClassName: PropTypes.string,
    listProps: PropTypes.object,
    popoverProps: PropTypes.object,
    textarea: PropTypes.bool
};

LocalizationEditor.propDescriptions = {
    control: 'A collection of properties to apply to the `<label>`, `<input>`/`<textarea>` and `<button>` elements.',
    controlShape: {
        label: 'Localized text for the `<label>` element.',
        language: 'Text to display on the `<button>` element. Meant to be the language of the text in the `<input>`/`<textarea>` element.'
    },
    menu: 'An array of objects that represent the values of the elements in the dropdown menu. The shape of the objects in the array is `{ placeholder: string, language: string, inputProps: object }`.',
    textarea: 'Set to **true** to enable a Localization Editor with a textarea.'
};

export default LocalizationEditor;
