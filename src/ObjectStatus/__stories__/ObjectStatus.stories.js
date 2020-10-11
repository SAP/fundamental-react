/* eslint-disable react/no-multi-comp */
import { action } from '@storybook/addon-actions';
import ObjectStatus from '../ObjectStatus';
import React from 'react';

export default {
    title: 'Component API/Object Display Components/ObjectStatus',
    component: ObjectStatus
};

/**
 * Object Status can display the semantic status of an object: negative, critical, positive, informative, or none.
 */

export const primary = () => (
    <div className='fddocs-container'>
        <ObjectStatus glyph='status-negative' status='negative'>Negative</ObjectStatus>
        <ObjectStatus glyph='status-critical' status='critical'>Critical</ObjectStatus>
        <ObjectStatus glyph='status-positive' status='positive'>Positive</ObjectStatus>
        <ObjectStatus glyph='hint' status='informative' >Info</ObjectStatus>
        <ObjectStatus glyph='to-be-reviewed'>Neutral</ObjectStatus>
    </div>);

export const icons = () => (
    <div className='fddocs-container'>
        <ObjectStatus ariaLabel='negative' glyph='status-negative'
            status='negative' />
        <ObjectStatus ariaLabel='critical' glyph='status-critical'
            status='critical' />
        <ObjectStatus ariaLabel='positive' glyph='status-positive'
            status='positive' />
        <ObjectStatus ariaLabel='info' glyph='hint'
            status='informative' />
        <ObjectStatus ariaLabel='neutral' glyph='to-be-reviewed' />
    </div>
);
icons.storyName = 'Icon Only';

export const text = () => (
    <div className='fddocs-container'>
        <ObjectStatus status='negative'>Negative</ObjectStatus>
        <ObjectStatus status='critical'>Critical</ObjectStatus>
        <ObjectStatus status='positive'>Positive</ObjectStatus>
        <ObjectStatus status='informative' >Info</ObjectStatus>
        <ObjectStatus>Neutral</ObjectStatus>
    </div>
);
text.storyName = 'Text Only';

export const iconAndText = () => (
    <div className='fddocs-container'>
        <ObjectStatus glyph='status-negative' status='negative'>Negative</ObjectStatus>
        <ObjectStatus glyph='status-critical' status='critical'>Critical</ObjectStatus>
        <ObjectStatus glyph='status-positive' status='positive'>Positive</ObjectStatus>
        <ObjectStatus glyph='hint' status='informative' >Info</ObjectStatus>
        <ObjectStatus glyph='to-be-reviewed'>Neutral</ObjectStatus>
    </div>
);
iconAndText.storyName = 'Icon and Text';

export const indications = () => (
    <div className='fddocs-container'>
        <ObjectStatus indication='1'>Dark Red</ObjectStatus>
        <ObjectStatus indication='2'>Red</ObjectStatus>
        <ObjectStatus indication='3'>Yellow</ObjectStatus>
        <ObjectStatus indication='4'>Green</ObjectStatus>
        <ObjectStatus indication='5'>Blue</ObjectStatus>
        <ObjectStatus indication='6'>Teal</ObjectStatus>
        <ObjectStatus indication='7'>Purple</ObjectStatus>
        <ObjectStatus indication='8'>Pink</ObjectStatus>

    </div>
);
indications.storyName = 'Generic Indication Colors';

/**
 * Inverted Object Status(optional inverted visualization) determines whether the background color reflects the set state instead of the control’s text.
 * Use the inverted object status if the information is crucial for the user’s actions and needs to stand out visually.
 */

export const inverted = () => (
    <>
        <div className='fddocs-container'>
            <ObjectStatus inverted status='negative'>Negative</ObjectStatus>
            <ObjectStatus inverted status='critical'>Critical</ObjectStatus>
            <ObjectStatus inverted status='positive'>Positive</ObjectStatus>
            <ObjectStatus inverted status='informative'>Info</ObjectStatus>
            <ObjectStatus inverted>Neutral</ObjectStatus>
            <ObjectStatus inverted status='negative'>7</ObjectStatus>
            <ObjectStatus inverted status='positive'>3.8</ObjectStatus>
        </div>
        <div className='fddocs-container'>
            <ObjectStatus glyph='status-negative' inverted
                status='negative'>Negative</ObjectStatus>
            <ObjectStatus glyph='status-critical' inverted
                status='critical'>Critical</ObjectStatus>
            <ObjectStatus indication='1' inverted>Dark Red</ObjectStatus>
            <ObjectStatus indication='2' inverted>Red</ObjectStatus>
            <ObjectStatus ariaLabel='informative' glyph='hint'
                inverted status='informative' />
            <ObjectStatus ariaLabel='neutral' glyph='to-be-reviewed'
                inverted />
        </div>
    </>
);
inverted.storyName = 'Inverted';

/**
 Use this feature if the object status is important in the business context and needs to stand out visually in the page header.
 */

export const large = () => (
    <>
        <div className='fddocs-container'>
            <ObjectStatus size='l' status='negative'>Negative</ObjectStatus>
            <ObjectStatus size='l' status='critical'>Critical</ObjectStatus>
            <ObjectStatus size='l' status='positive'>Positive</ObjectStatus>
            <ObjectStatus size='l' status='informative'>Info</ObjectStatus>
            <ObjectStatus size='l'>Neutral</ObjectStatus>
            <ObjectStatus size='l' status='negative'>7</ObjectStatus>
            <ObjectStatus size='l' status='positive'>3.8</ObjectStatus>
        </div>
        <div className='fddocs-container'>
            <ObjectStatus glyph='status-negative' size='l'
                status='negative'>Negative</ObjectStatus>
            <ObjectStatus glyph='status-critical' size='l'
                status='critical'>Critical</ObjectStatus>
            <ObjectStatus indication='1' size='l'>Dark Red</ObjectStatus>
            <ObjectStatus indication='2' size='l'>Red</ObjectStatus>
            <ObjectStatus ariaLabel='informative' glyph='hint'
                size='l' status='informative' />
            <ObjectStatus ariaLabel='neutral' glyph='to-be-reviewed'
                size='l' />
        </div>
    </>
);
large.storyName = 'Large Design';

const handleClick = () => {
    alert('Status clicked');
};

/**
If the object status is used as a link or if a click event is attached, a hover effect is shown on non-touch devices.
If the object status is shown using a combination of icon and text, there is no hover effect for the icon.
 */

export const clickable = () => (
    <>
        <div className='fddocs-container'>
            <ObjectStatus glyph='status-negative' onClick={handleClick}
                status='negative'>Negative</ObjectStatus>
            <ObjectStatus glyph='status-critical' onClick={handleClick}
                status='critical'>Critical</ObjectStatus>
            <ObjectStatus glyph='status-positive' onClick={handleClick}
                status='positive'>Positive</ObjectStatus>
            <ObjectStatus glyph='hint' link='#'
                status='informative'>Info</ObjectStatus>
            <ObjectStatus glyph='to-be-reviewed'
                onClick={handleClick}>Neutral</ObjectStatus>
        </div>
        <div className='fddocs-container'>
            <ObjectStatus glyph='status-negative' inverted
                link='#' status='negative'>Negative</ObjectStatus>
            <ObjectStatus glyph='status-critical' inverted
                link='#' status='critical'>Critical</ObjectStatus>
            <ObjectStatus indication='1' inverted
                link='#'>Dark Red</ObjectStatus>
            <ObjectStatus indication='2' inverted
                link='#'>Red</ObjectStatus>
            <ObjectStatus ariaLabel='informative' glyph='hint'
                inverted link='#'
                status='informative' />
            <ObjectStatus ariaLabel='neutral' glyph='to-be-reviewed'
                inverted link='#' />
        </div>
        <div className='fddocs-container'>
            <ObjectStatus glyph='status-negative' onClick={handleClick}
                size='l' status='negative'>Negative</ObjectStatus>
            <ObjectStatus glyph='status-critical' onClick={handleClick}
                size='l' status='critical'>Critical</ObjectStatus>
            <ObjectStatus indication='1' onClick={handleClick}
                size='l'>Dark Red</ObjectStatus>
            <ObjectStatus indication='2' link='#'
                size='l'>Red</ObjectStatus>
            <ObjectStatus ariaLabel='info' glyph='hint'
                link='#' size='l'
                status='informative' />
            <ObjectStatus ariaLabel='info' glyph='to-be-reviewed'
                link='#' size='l' />
        </div>
    </>
);
clickable.storyName = 'Clickable';



export const dev = () => (
    <>
        <div className='fddocs-container'>
            <ObjectStatus glyph='status-negative' onClick={action('status-negative-on-click')}
                status='negative'>Negative</ObjectStatus>
            <ObjectStatus glyph='status-critical' onClick={action('status-critical-on-click')}
                status='critical'>Critical</ObjectStatus>
            <ObjectStatus glyph='status-positive' onClick={action('status-positive-on-click')}
                status='positive'>Positive</ObjectStatus>
            <ObjectStatus glyph='hint' link='#'
                status='informative'>Info</ObjectStatus>
            <ObjectStatus glyph='to-be-reviewed'
                onClick={action('to-be-reviewed-on-click')}>Neutral</ObjectStatus>
        </div>
        <div className='fddocs-container'>
            <ObjectStatus glyph='status-negative' inverted
                link='#' status='negative'>Negative</ObjectStatus>
            <ObjectStatus glyph='status-critical' inverted
                link='#' status='critical'>Critical</ObjectStatus>
            <ObjectStatus indication='1' inverted
                link='#'>Dark Red</ObjectStatus>
            <ObjectStatus indication='2' inverted
                link='#'>Red</ObjectStatus>
            <ObjectStatus ariaLabel='informative' glyph='hint'
                inverted link='#'
                status='informative' />
            <ObjectStatus ariaLabel='neutral' glyph='to-be-reviewed'
                inverted link='#' />
        </div>
        <div className='fddocs-container'>
            <ObjectStatus glyph='status-negative' onClick={action('large-status-negative-on-click')}
                size='l' status='negative'>Negative</ObjectStatus>
            <ObjectStatus glyph='status-critical' onClick={action('large-status-critical-on-click')}
                size='l' status='critical'>Critical</ObjectStatus>
            <ObjectStatus indication='1' onClick={action('indication-1-on-click')}
                size='l'>Dark Red</ObjectStatus>
            <ObjectStatus indication='2' link='#'
                size='l'>Red</ObjectStatus>
            <ObjectStatus ariaLabel='info' glyph='hint'
                link='#' size='l'
                status='informative' />
            <ObjectStatus ariaLabel='info' glyph='to-be-reviewed'
                link='#' size='l' />
        </div>
    </>
);

export const noStyles = () => (
    <div className='fddocs-container'>
        <ObjectStatus
            cssNamespace='xxx'
            glyph='status-negative'
            status='negative'>Negative</ObjectStatus>
        <ObjectStatus
            cssNamespace='xxx'
            glyph='status-critical'
            status='critical'>Critical</ObjectStatus>
        <ObjectStatus
            cssNamespace='xxx'
            glyph='status-positive'
            status='positive'>Positive</ObjectStatus>
        <ObjectStatus
            cssNamespace='xxx'
            glyph='hint'
            status='informative' >Info</ObjectStatus>
        <ObjectStatus
            cssNamespace='xxx'
            glyph='to-be-reviewed'>Neutral</ObjectStatus>
    </div>
);
noStyles.parameters = { docs: { disable: true } };
