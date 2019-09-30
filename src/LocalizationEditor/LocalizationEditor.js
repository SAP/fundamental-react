import Button from '../Button/Button';
import classnames from 'classnames';
import FormInput from '../Forms/FormInput';
import FormLabel from '../Forms/FormLabel';
import FormTextArea from '../Forms/FormTextarea';
import Menu from '../Menu/Menu';
import Popover from '../Popover/Popover';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '../utils/WithStyles/WithStyles';


const LocalizationEditor = React.forwardRef(({ control, menu, id, compact, textarea, className, inputClassName, listProps, popoverProps,
    customStyles, disableStyles, ...props }, ref) => {

    const localizationEditorClasses = classnames(
        'fd-localization-editor',
        className
    );

    const localizationInputClasses = classnames(
        'fd-input-group__input',
        inputClassName
    );

    const disableCSS = disableStyles || customStyles ? true : false;

    return (
        <div {...props} className={localizationEditorClasses}
            ref={ref}>
            <FormLabel
                {...control.labelProps}
                disableStyles={disableCSS}
                htmlFor={id}>
                {control.label}
            </FormLabel>
            <Popover
                {...popoverProps}
                body={
                    <Menu disableStyles={disableCSS}>
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
                                                    disableStyles={disableCSS} />
                                            ) : (
                                                <FormInput
                                                    {...inputProps}
                                                    className={localizationInputClasses}
                                                    compact={compact}
                                                    disableStyles={disableCSS}
                                                    placeholder={placeholder} />
                                            )}
                                            <span
                                                className='fd-input-group__addon fd-input-group__addon--button'>
                                                <Button
                                                    className='fd-input-group__button'
                                                    compact={compact}
                                                    disableStyles={disableCSS}
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
                                compact={compact}
                                disableStyles={disableCSS} />
                        ) : (
                            <FormInput
                                {...control.inputProps}
                                className={localizationInputClasses}
                                compact={compact}
                                disableStyles={disableCSS}
                                placeholder={control.placeholder} />
                        )}
                        <span
                            className='fd-input-group__addon fd-input-group__addon--button'>
                            <Button
                                {...control.buttonProps}
                                className='fd-input-group__button'
                                compact={compact}
                                disableStyles={disableCSS}
                                option='light'>
                                {control.language}
                            </Button>
                        </span>
                    </div>
                }
                disableStyles={disableCSS}
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
    customStyles: PropTypes.object,
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

export default withStyles(LocalizationEditor, { cssFile: ['input-group', 'localization-editor'] });
