import Button from '../Button/Button';
import classnames from 'classnames';
import FormInput from '../Forms/FormInput';
import FormLabel from '../Forms/FormLabel';
import FormTextArea from '../Forms/FormTextarea';
import Menu from '../Menu/Menu';
import Popover from '../Popover/Popover';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';


const LocalizationEditor = React.forwardRef(({ control, menu, id, compact, textarea, className, inputClassName, listProps, popoverProps,
    disableStyles, ...props }, ref) => {

    useEffect(() => {
        if (!disableStyles) {
            require('fundamental-styles/dist/localization-editor.css');
            require('fundamental-styles/dist/input-group.css');
        }
    }, []);

    const localizationEditorClasses = classnames(
        'fd-localization-editor',
        className
    );

    const localizationInputClasses = classnames(
        'fd-input-group__input',
        inputClassName
    );

    return (
        <div {...props} className={localizationEditorClasses}
            ref={ref}>
            <FormLabel
                {...control.labelProps}
                disableStyles={disableStyles}
                htmlFor={id}>
                {control.label}
            </FormLabel>
            <Popover
                {...popoverProps}
                body={
                    <Menu disableStyles={disableStyles}>
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
                                                <FormTextArea
                                                    {...inputProps}
                                                    className={localizationInputClasses}
                                                    disableStyles={disableStyles} />
                                            ) : (
                                                <FormInput
                                                    {...inputProps}
                                                    className={localizationInputClasses}
                                                    compact={compact}
                                                    disableStyles={disableStyles}
                                                    placeholder={placeholder} />
                                            )}
                                            <span
                                                className='fd-input-group__addon fd-input-group__addon--button'>
                                                <Button
                                                    className='fd-input-group__button'
                                                    compact={compact}
                                                    disableStyles={disableStyles}
                                                    option='transparent'>
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
                                compact={compact}
                                disableStyles={disableStyles} />
                        ) : (
                            <FormInput
                                {...control.inputProps}
                                className={localizationInputClasses}
                                compact={compact}
                                disableStyles={disableStyles}
                                placeholder={control.placeholder} />
                        )}
                        <span
                            className='fd-input-group__addon fd-input-group__addon--button'>
                            <Button
                                {...control.buttonProps}
                                className='fd-input-group__button'
                                compact={compact}
                                disableStyles={disableStyles}
                                option='transparent'>
                                {control.language}
                            </Button>
                        </span>
                    </div>
                }
                disableKeyPressHandler
                disableStyles={disableStyles}
                id={id}
                noArrow />
        </div>
    );
});

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
    disableStyles: PropTypes.bool,
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
