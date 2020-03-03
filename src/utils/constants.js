export const MESSAGESTRIP_TYPES = [
    'warning',
    'error',
    'success',
    'information'
];

export const BUTTON_OPTIONS = [
    'emphasized',
    'transparent'
];
export const BUTTON_TYPES = [
    'standard',
    'positive',
    'negative',
    'medium'
];

export const DIALOG_SIZES = [
    's',
    'm',
    'l',
    'xl'
];

export const FORM_MESSAGE_TYPES = [
    'error',
    'warning',
    'information',
    'success'
];

export const FORM_STATES = [
    'warning',
    'invalid',
    'valid',
    'information'
];

export const ICON_SIZES = [
    's',
    'm',
    'l',
    'xl'
];

export const IDENTIFIER_MODIFIERS = [
    'circle',
    'transparent'
];

export const IDENTIFIER_SIZES = [
    'xxs',
    'xs',
    's',
    'm',
    'l',
    'xl',
    'xxl'
];

export const IMAGE_SIZES = [
    's',
    'm',
    'l'
];

export const IMAGE_TYPES = [
    'circle'
];

export const INLINE_HELP_PLACEMENTS = [
    'bottom-right',
    'bottom-left',
    'right',
    'left',
    'bottom-center'
];

export const POPOVER_ALIGNMENTS = [
    'right'
];

export const POPOVER_TYPES = [
    true,
    'dialog',
    'grid',
    'listbox',
    'menu',
    'tree'
];

export const POPPER_PLACEMENTS = [
    'bottom-start',
    'bottom',
    'bottom-end',
    'left-start',
    'left',
    'left-end',
    'right-start',
    'right',
    'right-end',
    'top-start',
    'top',
    'top-end'
];

export const POPPER_SIZING_TYPES = ['none', 'matchTarget', 'minTarget', 'maxTarget'];

export const POPPER_SIZING_TYPES_DESCRIPTION = `<ul>
<li>"matchTarget" - left and right edges align with the target</li>
<li>"minTarget" - right edge aligns with target unless Popover content is bigger</li>
<li>"maxTarget" - right edge aligns with target unless Popover content is smaller</li>
</ul>`;


export const TAB_SIZES = [
    's',
    'm',
    'l',
    'xl',
    'xxl'
];

export const GridSelector = {
    ROW: 'tr, [role="row"]',
    HEADER: 'th',
    CELL: 'td, [role="gridcell"]',
    FOCUSABLE: 'input:enabled, select, textarea, a[href], button, [tabindex], [role="button"]'
};
