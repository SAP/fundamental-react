import React from 'react';
import { Button, ButtonGroup } from '../';
import { Description, DocsText, DocsTile, Header, Import, Playground, Properties, Separator } from '../_playground';

export const ButtonComponent = () => {
    const buttonOptionsCode = `<Button option="emphasized" onClick={() => clickBtnHandler('Emphasized')}>
    Emphasized Button
</Button>
<Button onClick={() => clickBtnHandler('Regular')}>Regular Button</Button>
<Button option="light" onClick={() => clickBtnHandler('Light')}>Light Button</Button>

const clickBtnHandler = btn => {
    alert(\`You clicked the \${btn} Button\`);
};`;

    const buttonTypesCode = `<Button>Action Button</Button>
<Button type="standard">Standard Button</Button>
<Button type="positive">Positive Button</Button>
<Button type="medium">Medium Button</Button>
<Button type="negative">Negative Button</Button>`;

    const buttonIconCode = `<Button option="emphasized" glyph="cart">
    Add to Cart
</Button>

<Button glyph="cart">Add to Cart</Button>

<Button option="light" glyph="filter">
    Add to Cart
</Button>

<Button option="emphasized" type="positive" glyph="accept">
    Approve
</Button>

<Button option="emphasized" type="negative" glyph="decline">
    Reject
</Button>

<Button option="emphasized" glyph="cart" />

<Button glyph="cart" />

<Button option="light" glyph="filter" />

<Button option="emphasized" type="positive" glyph="accept" />

<Button option="emphasized" type="negative" glyph="decline" />`;

    const buttonSizesCode = `<Button>Default</Button>
<Button compact>Compact</Button>`;

    const buttonStatesCode = `<Button option="emphasized">Normal State</Button>
<Button option="emphasized" selected>
    Selected State
</Button>
<Button option="emphasized" disabled>
    Disabled State
</Button>

<Button>Normal State</Button>
<Button selected>Selected State</Button>
<Button disabled>Disabled State</Button>

<Button option="light">Normal State</Button>
<Button option="light" selected>
    Selected State
</Button>
<Button option="light" disabled>
    Disabled State
</Button>

<Button type="standard">Normal State</Button>
<Button type="standard" selected>
    Selected State
</Button>
<Button type="standard" disabled>
    Disabled State
</Button>

<Button type="positive">Normal State</Button>
<Button type="positive" selected>
    Selected State
</Button>
<Button type="positive" disabled>
    Disabled State
</Button>

<Button type="negative">Normal State</Button>
<Button type="negative" selected>
    Selected State
</Button>
<Button type="negative" disabled>
    Disabled State
</Button>`;

    const buttonGroupCode = `<ButtonGroup>
    <Button glyph="survey" />
    <Button glyph="pie-chart" selected/>
    <Button glyph="pool" />
</ButtonGroup>

<ButtonGroup>
    <Button compact>Left</Button>
    <Button compact selected>Middle</Button>
    <Button compact>Right</Button>
</ButtonGroup>`;

    const clickBtnHandler = btn => {
        alert(`You clicked the ${btn} Button`);
    };

    const buttonOptionsDescription = `
There are three emphasis styles used to indicate the importance of the button on the page. \n\n
* **Emphasized Button**: There should only be one highlighted button on the page. This is
the primary call to action.\n\n
* **Regular Button**: The default button style and the most common button. There may be
more than one on a page.\n\n
* **Light Button**: This is the lowest priority button and most often used with page
content like appearing in a table or list. There may be more than one on the page.
`;
    const buttonTypesDescription = `
* **Action Button**: The default button \n\n
* **Standard Button**: Neutral or informative color \n\n
* **Positive Button**: Used for positive actions such as approved, ok, yes. \n\n
* **Medium Button**: Used for warnings or alert \n\n
* **Negative Button**: Used for negative actions such as decline, cancel, no.
`;
    return (
        <div>
            <Header>Button</Header>
            <Description>
                A **Button** allows users to perform an action. The priority of buttons within a page should be considered.
                For instance, only use the main button once within a page or modal. Color is also important. For
                instance, the most important button has a blue background where as a red button should only be used if
                the action it performs is potentially destructive.
            </Description>
            <Import sourceModule={require.resolve('./Button')} />

            <Separator />

            <Properties sourceModule={require.resolve('./Button')} />

            <Separator />

            <h2>Button Options</h2>
            <Description>{buttonOptionsDescription}</Description>
            <DocsTile centered>
                <div className='fd-doc__margin--button'>
                    <Button onClick={() => clickBtnHandler('Emphasized')} option='emphasized'>
                        Emphasized Button
                    </Button>
                    <Button onClick={() => clickBtnHandler('Regular')}>Regular Button</Button>
                    <Button onClick={() => clickBtnHandler('Light')} option='light'>Light Button</Button>
                </div>
            </DocsTile>
            <DocsText>{buttonOptionsCode}</DocsText>

            <Separator />

            <h2>Button Types</h2>
            <Description>{buttonTypesDescription}</Description>
            <DocsTile centered>
                <div className='fd-doc__margin--button'>
                    <Button>Action Button</Button>
                    <Button type='standard'>Standard Button</Button>
                    <Button type='positive'>Positive Button</Button>
                    <Button type='medium'>Medium Button</Button>
                    <Button type='negative'>Negative Button</Button>
                </div>
            </DocsTile>
            <DocsText>{buttonTypesCode}</DocsText>

            <Separator />

            <h2>Buttons with Icon</h2>
            <Description>
                Button can have an icon with text or just and icon. You can use `glyph="icon-name"` to
                attach an icon to the button.
            </Description>
            <DocsTile centered>
                <div className='fd-doc__margin--button'>
                    <Button glyph='cart' option='emphasized'>
                        Add to Cart
                    </Button>

                    <Button glyph='cart'>Add to Cart</Button>

                    <Button glyph='filter' option='light'>
                        Add to Cart
                    </Button>

                    <Button glyph='accept' option='emphasized'
                        type='positive'>
                        Approve
                    </Button>

                    <Button glyph='decline' option='emphasized'
                        type='negative'>
                        Reject
                    </Button>

                    <br />
                    <br />
                    <br />

                    <Button glyph='cart' option='emphasized' />

                    <Button glyph='cart' />

                    <Button glyph='filter' option='light' />

                    <Button glyph='accept' option='emphasized'
                        type='positive' />

                    <Button glyph='decline' option='emphasized'
                        type='negative' />
                </div>
            </DocsTile>
            <DocsText>{buttonIconCode}</DocsText>

            <Separator />

            <h2>Button Sizes</h2>
            <Description>
                There are two sizes. The `compact` size is only used on desktop and it is full size when used
                on a touch device.
            </Description>
            <DocsTile centered>
                <div className='fd-doc__margin--button'>
                    <Button>Default</Button>
                    <Button compact>Compact</Button>
                </div>
            </DocsTile>
            <DocsText>{buttonSizesCode}</DocsText>

            <Separator />

            <h2>Button States</h2>
            <Description>
                There are three states: `normal` (default), `selected`, and `disabled`.
            </Description>
            <DocsTile centered>
                <div className='fd-doc__margin--button'>
                    <Button option='emphasized'>Normal State</Button>
                    <Button option='emphasized' selected>
                        Selected State
                    </Button>
                    <Button disabled option='emphasized'>
                        Disabled State
                    </Button>
                    <br />
                    <br />
                    <Button>Normal State</Button>
                    <Button selected>Selected State</Button>
                    <Button disabled>Disabled State</Button>
                    <br />
                    <br />
                    <Button option='light'>Normal State</Button>
                    <Button option='light' selected>
                        Selected State
                    </Button>
                    <Button disabled option='light'>
                        Disabled State
                    </Button>
                    <br />
                    <br />
                    <Button type='standard'>Normal State</Button>
                    <Button selected type='standard'>
                        Selected State
                    </Button>
                    <Button disabled type='standard'>
                        Disabled State
                    </Button>
                    <br />
                    <br />
                    <Button type='positive'>Normal State</Button>
                    <Button selected type='positive'>
                        Selected State
                    </Button>
                    <Button disabled type='positive'>
                        Disabled State
                    </Button>
                    <br />
                    <br />
                    <Button type='negative'>Normal State</Button>
                    <Button selected type='negative'>
                        Selected State
                    </Button>
                    <Button disabled type='negative'>
                        Disabled State
                    </Button>
                </div>
            </DocsTile>
            <DocsText>{buttonStatesCode}</DocsText>

            <Separator />

            <h2>Button Group</h2>

            <DocsTile centered>
                <div className='fd-doc__margin--buttonGroup'>
                    <ButtonGroup>
                        <Button glyph='survey' />
                        <Button glyph='pie-chart' selected />
                        <Button glyph='pool' />
                    </ButtonGroup>

                    <ButtonGroup>
                        <Button compact>Left</Button>
                        <Button compact selected>
                            Middle
                        </Button>
                        <Button compact>Right</Button>
                    </ButtonGroup>
                </div>
            </DocsTile>
            <DocsText>{buttonGroupCode}</DocsText>

            <Separator />
            <h2>Playground Button</h2>
            <Playground
                component='button'
                schema={[
                    {
                        attribute: 'children',
                        typeOfAttribute: 'string'
                    },
                    {
                        attribute: 'option',
                        typeOfAttribute: 'string',
                        'enum': ['', 'emphasized', 'light']
                    },
                    {
                        attribute: 'type',
                        typeOfAttribute: 'string',
                        'enum': ['', 'standard', 'positive', 'medium', 'negative']
                    },
                    {
                        attribute: 'compact',
                        typeOfAttribute: 'boolean'
                    },
                    {
                        attribute: 'glyph',
                        typeOfAttribute: 'string',
                        'enum': [
                            '',
                            'accelerated',
                            'accept',
                            'accidental-leave',
                            'account',
                            'accounting-document-verification',
                            'action',
                            'action-settings',
                            'activate',
                            'activities',
                            'activity-2',
                            'activity-assigned-to-goal',
                            'activity-individual',
                            'activity-items',
                            'add',
                            'add-activity',
                            'add-activity-2',
                            'add-contact',
                            'add-coursebook',
                            'add-document',
                            'add-equipment',
                            'add-favorite',
                            'add-filter',
                            'add-photo',
                            'add-process',
                            'add-product',
                            'address-book',
                            'addresses',
                            'alert',
                            'along-stacked-chart',
                            'alphabetical-order',
                            'appointment',
                            'appointment-2',
                            'approvals',
                            'area-chart',
                            'arobase',
                            'arrow-bottom',
                            'arrow-down',
                            'arrow-left',
                            'arrow-right',
                            'arrow-top',
                            'attachment',
                            'attachment-audio',
                            'attachment-e-pub',
                            'attachment-html',
                            'attachment-photo',
                            'attachment-text-file',
                            'attachment-video',
                            'attachment-zip-file',
                            'back-to-top',
                            'background',
                            'badge',
                            'bar-chart',
                            'bar-code',
                            'basket',
                            'batch-payments',
                            'bbyd-active-sales',
                            'bbyd-dashboard',
                            'bed',
                            'begin',
                            'bell',
                            'blank-tag',
                            'blank-tag-2',
                            'bo-strategy-management',
                            'bold-text',
                            'bookmark',
                            'border',
                            'broken-link',
                            'bubble-chart',
                            'building',
                            'bullet-text',
                            'burglary',
                            'bus-public-transport',
                            'business-by-design',
                            'business-card',
                            'business-objects-experience',
                            'business-objects-explorer',
                            'business-objects-mobile',
                            'business-one',
                            'calendar',
                            'call',
                            'camera',
                            'cancel',
                            'cancel-maintenance',
                            'cancel-share',
                            'capital-projects',
                            'car-rental',
                            'card',
                            'cargo-train',
                            'cart',
                            'cart-2',
                            'cart-3',
                            'cart-4',
                            'cart-5',
                            'cart-approval',
                            'cart-full',
                            'cause',
                            'chain-link',
                            'chalkboard',
                            'chart-axis',
                            'chart-table-view',
                            'Chart-Tree-Map',
                            'check-availability',
                            'checklist',
                            'checklist-2',
                            'checklist-item',
                            'checklist-item-2',
                            'chevron-phase',
                            'chevron-phase-2',
                            'choropleth-chart',
                            'circle-task',
                            'circle-task-2',
                            'citizen-connect',
                            'clear-filter',
                            'clinical-order',
                            'clinical-tast-tracker',
                            'close-command-field',
                            'cloud',
                            'co',
                            'collaborate',
                            'collapse',
                            'collapse-group',
                            'collections-insight',
                            'collections-management',
                            'collision',
                            'color-fill',
                            'column-chart-dual-axis',
                            'comment',
                            'commission-check',
                            'company-view',
                            'compare',
                            'compare-2',
                            'competitor',
                            'complete',
                            'connected',
                            'contacts',
                            'copy',
                            'course-book',
                            'course-program',
                            'create',
                            'create-entry-time',
                            'create-form',
                            'create-leave-request',
                            'create-session',
                            'credit-card',
                            'crm-sales',
                            'crm-service-manager',
                            'crop',
                            'crossed-line-chart',
                            'curriculum',
                            'cursor',
                            'customer',
                            'customer-and-contacts',
                            'customer-and-supplier',
                            'customer-briefing',
                            'customer-financial-fact-sheet',
                            'customer-history',
                            'customer-order-entry',
                            'customer-view',
                            'customize',
                            'database',
                            'date-time',
                            'decision',
                            'decline',
                            'decrease-line-height',
                            'delete',
                            'detail-view',
                            'developer-settings',
                            'dimension',
                            'disconnected',
                            'discussion',
                            'discussion-2',
                            'dishwasher',
                            'display',
                            'display-more',
                            'doc-attachment',
                            'doctor',
                            'document',
                            'document-text',
                            'documents',
                            'donut-chart',
                            'down',
                            'download',
                            'download-from-cloud',
                            'draw-rectangle',
                            'drill-down',
                            'drill-up',
                            'drop-down-list',
                            'dropdown',
                            'duplicate',
                            'e-care',
                            'e-learning',
                            'eam-work-order',
                            'edit',
                            'edit-outside',
                            'education',
                            'electrocardiogram',
                            'electronic-medical-record',
                            'email',
                            'email-read',
                            'employee',
                            'employee-approvals',
                            'employee-lookup',
                            'employee-pane',
                            'employee-rejections',
                            'end-user-experience-monitoring',
                            'endoscopy',
                            'energy-saving-lightbulb',
                            'enter-more',
                            'eraser',
                            'error',
                            'example',
                            'excel-attachment',
                            'exitfullscreen',
                            'expand',
                            'expand-group',
                            'expense-report',
                            'explorer',
                            'factory',
                            'fallback',
                            'family-care',
                            'family-protection',
                            'favorite',
                            'favorite-list',
                            'fax-machine',
                            'feed',
                            'feeder-arrow',
                            'filter',
                            'filter-analytics',
                            'filter-facets',
                            'filter-fields',
                            'flag',
                            'flight',
                            'fob-watch',
                            'folder',
                            'folder-blank',
                            'folder-full',
                            'form',
                            'forward',
                            'fridge',
                            'full-screen',
                            'full-stacked-chart',
                            'full-stacked-column-chart',
                            'functional-location',
                            'future',
                            'gantt-bars',
                            'general-leave-request',
                            'generate-shortcut',
                            'geographic-bubble-chart',
                            'globe',
                            'goal',
                            'goalseek',
                            'grid',
                            'group',
                            'group-2',
                            'header',
                            'heading-1',
                            'heading-2',
                            'heading-3',
                            'headset',
                            'heating-cooling',
                            'heatmap-chart',
                            'hello-world',
                            'hide',
                            'hint',
                            'history',
                            'home',
                            'home-share',
                            'horizontal-bar-chart',
                            'horizontal-bar-chart-2',
                            'horizontal-bullet-chart',
                            'horizontal-grip',
                            'horizontal-stacked-chart',
                            'horizontal-waterfall-chart',
                            'hr-approval',
                            'idea-wall',
                            'image-viewer',
                            'inbox',
                            'incident',
                            'incoming-call',
                            'increase-line-height',
                            'indent',
                            'initiative',
                            'inspect',
                            'inspect-down',
                            'inspection',
                            'instance',
                            'insurance-car',
                            'insurance-house',
                            'insurance-life',
                            'internet-browser',
                            'inventory',
                            'ipad',
                            'ipad-2',
                            'iphone',
                            'iphone-2',
                            'it-host',
                            'it-instance',
                            'it-system',
                            'italic-text',
                            'jam',
                            'journey-arrive',
                            'journey-change',
                            'journey-depart',
                            'key',
                            'key-user-settings',
                            'kpi-corporate-performance',
                            'kpi-managing-my-area',
                            'lab',
                            'laptop',
                            'lateness',
                            'lead',
                            'lead-outdated',
                            'leads',
                            'learning-assistant',
                            'legend',
                            'less',
                            'letter',
                            'lightbulb',
                            'line-chart',
                            'line-chart-dual-axis',
                            'line-chart-time-axis',
                            'line-charts',
                            'list',
                            'loan',
                            'locate-me',
                            'locked',
                            'log',
                            'machine',
                            'manager',
                            'manager-insight',
                            'map',
                            'map-2',
                            'map-3',
                            'marketing-campaign',
                            'master-task-triangle',
                            'master-task-triangle-2',
                            'meal',
                            'measure',
                            'measurement-document',
                            'measuring-point',
                            'media-forward',
                            'media-pause',
                            'media-play',
                            'media-reverse',
                            'media-rewind',
                            'meeting-room',
                            'menu',
                            'menu2',
                            'message-error',
                            'message-information',
                            'message-popup',
                            'message-success',
                            'message-warning',
                            'microphone',
                            'mileage',
                            'minimize',
                            'mirrored-task-circle',
                            'mirrored-task-circle-2',
                            'money-bills',
                            'monitor-payments',
                            'move',
                            'mri-scan',
                            'multiple-bar-chart',
                            'multiple-line-chart',
                            'multiple-pie-chart',
                            'multiple-radar-chart',
                            'multiselect',
                            'multiselect-all',
                            'multiselect-none',
                            'my-sales-order',
                            'my-view',
                            'nav-back',
                            'navigation-down-arrow',
                            'navigation-left-arrow',
                            'navigation-right-arrow',
                            'navigation-up-arrow',
                            'negative',
                            'Netweaver-business-client',
                            'newspaper',
                            'notes',
                            'notification-2',
                            'number-sign',
                            'numbered-text',
                            'nurse',
                            'nutrition-activity',
                            'official-service',
                            'offsite-work',
                            'open-command-field',
                            'open-folder',
                            'opportunities',
                            'opportunity',
                            'order-status',
                            'org-chart',
                            'outbox',
                            'outdent',
                            'outgoing-call',
                            'overflow',
                            'overlay',
                            'overview-chart',
                            'paging',
                            'paid-leave',
                            'palette',
                            'paper-plane',
                            'passenger-train',
                            'past',
                            'paste',
                            'pause',
                            'payment-approval',
                            'pdf-attachment',
                            'pdf-reader',
                            'pending',
                            'per-diem',
                            'performance',
                            'permission',
                            'person-placeholder',
                            'personnel-view',
                            'pharmacy',
                            'phone',
                            'photo-voltaic',
                            'physical-activity',
                            'picture',
                            'pie-chart',
                            'pipeline-analysis',
                            'play',
                            'pool',
                            'popup-window',
                            'positive',
                            'post',
                            'ppt-attachment',
                            'present',
                            'print',
                            'private',
                            'process',
                            'product',
                            'program-triangles',
                            'program-triangles-2',
                            'project-definition-triangle',
                            'project-definition-triangle-2',
                            'projector',
                            'provision',
                            'pull-down',
                            'pushpin-off',
                            'pushpin-on',
                            'puzzle',
                            'quality-issue',
                            'question-mark',
                            'radar-chart',
                            'receipt',
                            'record',
                            'redo',
                            'refresh',
                            'repost',
                            'request',
                            'reset',
                            'resize',
                            'resize-corner',
                            'resize-horizontal',
                            'resize-vertical',
                            'response',
                            'restart',
                            'retail-store',
                            'retail-store-manager',
                            'rhombus-milestone',
                            'rhombus-milestone-2',
                            'role',
                            'sales-document',
                            'sales-notification',
                            'sales-order',
                            'sales-order-item',
                            'sales-quote',
                            'sap-box',
                            'sap-logo-shape',
                            'sap-ui5',
                            'save',
                            'scatter-chart',
                            'scissors',
                            'screen-split-one',
                            'screen-split-three',
                            'screen-split-two',
                            'search',
                            'settings',
                            'share',
                            'share-2',
                            'shelf',
                            'shield',
                            'shipping-status',
                            'shortcut',
                            'show',
                            'signature',
                            'simple-payment',
                            'simulate',
                            'slim-arrow-down',
                            'slim-arrow-left',
                            'slim-arrow-right',
                            'slim-arrow-up',
                            'soccor',
                            'sonography',
                            'sort',
                            'sort-ascending',
                            'sort-descending',
                            'sorting-ranking',
                            'sound',
                            'sound-loud',
                            'sound-off',
                            'source-code',
                            'status-critical',
                            'status-inactive',
                            'status-negative',
                            'status-positive',
                            'step',
                            'stethoscope',
                            'stop',
                            'study-leave',
                            'subway-train',
                            'suitcase',
                            'supplier',
                            'survey',
                            'switch-classes',
                            'switch-views',
                            'synchronize',
                            'syntax',
                            'syringe',
                            'sys-add',
                            'sys-back',
                            'sys-back-2',
                            'sys-cancel',
                            'sys-cancel-2',
                            'sys-enter',
                            'sys-enter-2',
                            'sys-find',
                            'sys-find-next',
                            'sys-first-page',
                            'sys-help',
                            'sys-help-2',
                            'sys-last-page',
                            'sys-minus',
                            'sys-monitor',
                            'sys-next-page',
                            'sys-prev-page',
                            'system-exit',
                            'system-exit-2',
                            'table-chart',
                            'table-view',
                            'tag',
                            'tag-cloud-chart',
                            'tags',
                            'target-group',
                            'task',
                            'taxi',
                            'technical-object',
                            'temperature',
                            'text-align-center',
                            'text-align-justified',
                            'text-align-left',
                            'text-align-right',
                            'text-formatting',
                            'theater',
                            'thing-type',
                            'thumb-down',
                            'thumb-up',
                            'time-account',
                            'time-entry-request',
                            'time-overtime',
                            'timesheet',
                            'to-be-reviewed',
                            'toaster-down',
                            'toaster-top',
                            'toaster-up',
                            'tools-opportunity',
                            'travel-expense',
                            'travel-expense-report',
                            'travel-itinerary',
                            'travel-request',
                            'tree',
                            'trend-down',
                            'trend-up',
                            'trip-report',
                            'ui-notifications',
                            'umbrella',
                            'underline-text',
                            'undo',
                            'unfavorite',
                            'unlocked',
                            'unpaid-leave',
                            'unwired',
                            'up',
                            'upload',
                            'upload-to-cloud',
                            'upstacked-chart',
                            'user-edit',
                            'user-settings',
                            'value-help',
                            'vds-file',
                            'vehicle-repair',
                            'vertical-bar-chart',
                            'vertical-bar-chart-2',
                            'vertical-bullet-chart',
                            'vertical-grip',
                            'vertical-stacked-chart',
                            'vertical-waterfall-chart',
                            'video',
                            'visits',
                            'waiver',
                            'wallet',
                            'warning',
                            'warning2',
                            'washing-machine',
                            'weather-proofing',
                            'web-cam',
                            'widgets',
                            'windows-doors',
                            'work-history',
                            'workflow-tasks',
                            'world',
                            'wounds-doc',
                            'wrench',
                            'write-new',
                            'write-new-document',
                            'x-ray',
                            'zoom-in',
                            'zoom-out'
                        ]
                    },
                    {
                        attribute: 'selected',
                        typeOfAttribute: 'boolean'
                    },
                    {
                        attribute: 'disabled',
                        typeOfAttribute: 'boolean'
                    }
                ]}>
                <Button compact={false} disabled={false}
                    glyph='' option='light'
                    selected={false} type='standard'>
                    BUTTON
                </Button>
            </Playground>
        </div>
    );
};
