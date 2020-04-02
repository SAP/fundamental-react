import classnames from 'classnames';
import CustomPropTypes from '../utils/CustomPropTypes/CustomPropTypes';
import PropTypes from 'prop-types';
import React from 'react';

const FormTextareaCounter = React.forwardRef(({ children, className, charCount, localizedText, showCounter, ...props }, ref) => {

    const formTextareaCounterClasses = classnames(
        'fd-textarea-counter', className
    );

    const getText = () => {
        let text = children || '';
        let keyword = localizedText.counterKeyword,
            keywordIdx = text.indexOf(keyword),
            count = charCount >= 0 ? charCount : 0;
        if (keywordIdx === -1) {
            text = localizedText.counterText;
            keywordIdx = text.indexOf(keyword);
        }
        if (keywordIdx >= 0) {
            text = keywordIdx + keyword.length < text.length ?
                text.substring(0, keywordIdx) + count + text.substring(keywordIdx + keyword.length) :
                text.substring(0, keywordIdx) + count;
        }
        return text;
    };

    return (showCounter ?
        <div {...props}
            className={formTextareaCounterClasses}
            ref={ref}>
            {getText()}
        </div> : null);
});

FormTextareaCounter.displayName = 'FormTextareaCounter';

FormTextareaCounter.propTypes = {
    charCount: PropTypes.number,
    children: PropTypes.node,
    className: PropTypes.string,
    localizedText: CustomPropTypes.i18n({
        counterKeyword: PropTypes.string,
        counterText: PropTypes.string
    }),
    showCounter: PropTypes.bool
};

FormTextareaCounter.defaultProps = {
    localizedText: {
        counterKeyword: '#counter#',
        counterText: '#counter# characters left'
    }
};

export default FormTextareaCounter;
