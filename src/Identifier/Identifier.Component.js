import { Identifier } from '../';
import React from 'react';
import { Description, DocsText, DocsTile, Header, Import, Playground, Properties, Separator } from '../_playground';


export const IdentifierComponent = () => {
    const iconsCode = `<Identifier size="xxs" glyph="washing-machine" />
<Identifier size="xs"  glyph="washing-machine" />
<Identifier size="s"   glyph="washing-machine" />
<Identifier size="m"   glyph="washing-machine" />
<Identifier size="l"   glyph="washing-machine" />
<Identifier size="xl"  glyph="washing-machine" />
<Identifier size="xxl" glyph="washing-machine" />`;
    const initialsCode = `<Identifier size="xxs" label="Wendy Wallace">WW</Identifier>
<Identifier size="xs"  label="Wendy Wallace">WW</Identifier>
<Identifier size="s"   label="Wendy Wallace">WW</Identifier>
<Identifier size="m"   label="Wendy Wallace">WW</Identifier>
<Identifier size="l"   label="Wendy Wallace">WW</Identifier>
<Identifier size="xl"  label="Wendy Wallace">WW</Identifier>
<Identifier size="xxl" label="Wendy Wallace">WW</Identifier>`;
    const circleCode = `<Identifier size="xxs" glyph="washing-machine" modifier="circle" />
<Identifier size="xs"  glyph="washing-machine" modifier="circle" />
<Identifier size="s"   glyph="washing-machine" modifier="circle" />
<Identifier size="m"   glyph="washing-machine" modifier="circle" />
<Identifier size="l"   glyph="washing-machine" modifier="circle" />
<Identifier size="xl"  glyph="washing-machine" modifier="circle" />
<Identifier size="xxl" glyph="washing-machine" modifier="circle" />`;
    const backgroundImageCode = `<Identifier size="xxs" backgroundImageUrl="https://placeimg.com/400/400/nature" modifier="circle" />
<Identifier size="xs"  backgroundImageUrl="https://placeimg.com/400/400/nature" modifier="circle" />
<Identifier size="s"   backgroundImageUrl="https://placeimg.com/400/400/nature" modifier="circle" />
<Identifier size="m"   backgroundImageUrl="https://placeimg.com/400/400/nature" modifier="circle" />
<Identifier size="l"   backgroundImageUrl="https://placeimg.com/400/400/nature" modifier="circle" />
<Identifier size="xl"  backgroundImageUrl="https://placeimg.com/400/400/nature" modifier="circle" />
<Identifier size="xxl" backgroundImageUrl="https://placeimg.com/400/400/nature" modifier="circle" />`;
    const transparentCode = `<Identifier size="m" label="Wendy Wallace" modifier="transparent">WW</Identifier>
<Identifier size="l" glyph="washing-machine" modifier="transparent"></Identifier>`;
    const accentColorsCode = `<Identifier size="m" glyph="money-bills" color={1}></Identifier>
<Identifier size="m" glyph="money-bills" color={2}></Identifier>
<Identifier size="m" glyph="money-bills" color={3}></Identifier>
<Identifier size="m" glyph="money-bills" color={4}></Identifier>
<Identifier size="m" glyph="money-bills" color={5}></Identifier>
<Identifier size="m" glyph="money-bills" color={6}></Identifier>
<Identifier size="m" glyph="money-bills" color={7}></Identifier>
<Identifier size="m" glyph="money-bills" color={8}></Identifier>
<Identifier size="m" glyph="money-bills" color={9}></Identifier>`;

    return (
        <div>
            <Header>Identifier</Header>
            <Description>A visual presentation option around using an icon or user initials .</Description>
            <Import module='Identifier' path='/fundamental-react/src/' />

            <Separator />

            <Properties properties={[
                {name: 'size', description: 'string - These sizes are available: xxs (extra extra small) - 20px, xs (extra small) - 28px, s (small) - 32px, m (medium) - 48px, l (large) - 64px, xl (extra lagre) - 88px, and xxl (extra extra large). Default matches the base font size (14px).'},
                {name: 'glyph', description: 'string - The name of the icon to include. See the icon page for the list of icons.'},
                {name: 'label', description: 'string - Label text'},
                {name: 'modifier', description: 'string - Can be \'circle\' or \'transparent\'.'},
                {name: 'color', description: 'number - Applies a background color. Options include numbers from 1 to 9'},
                {name: 'backgroundImageUrl', description: 'string - Image url.'}

            ]} type='Inputs' />

            <Separator />

            <h2>Icon</h2>
            <DocsTile centered>
                <div className='fd-doc__margin--identifier'>
                    <Identifier glyph='washing-machine' size='xxs' />
                    <Identifier glyph='washing-machine' size='xs' />
                    <Identifier glyph='washing-machine' size='s' />
                    <Identifier glyph='washing-machine' size='m' />
                    <Identifier glyph='washing-machine' size='l' />
                    <Identifier glyph='washing-machine' size='xl' />
                    <Identifier glyph='washing-machine' size='xxl' />
                </div>
            </DocsTile>
            <DocsText>{iconsCode}</DocsText>

            <Separator />

            <h2>Initials</h2>
            <DocsTile centered>
                <div className='fd-doc__margin--identifier'>
                    <Identifier label='Wendy Wallace' size='xxs'>WW</Identifier>
                    <Identifier label='Wendy Wallace' size='xs'>WW</Identifier>
                    <Identifier label='Wendy Wallace' size='s'>WW</Identifier>
                    <Identifier label='Wendy Wallace' size='m'>WW</Identifier>
                    <Identifier label='Wendy Wallace' size='l'>WW</Identifier>
                    <Identifier label='Wendy Wallace' size='xl'>WW</Identifier>
                    <Identifier label='Wendy Wallace' size='xxl'>WW</Identifier>
                </div>
            </DocsTile>
            <DocsText>{initialsCode}</DocsText>

            <Separator />

            <h2>Circle</h2>
            <DocsTile centered>
                <div className='fd-doc__margin--identifier'>
                    <Identifier glyph='washing-machine' modifier='circle'
                        size='xxs' />
                    <Identifier glyph='washing-machine' modifier='circle'
                        size='xs' />
                    <Identifier glyph='washing-machine' modifier='circle'
                        size='s' />
                    <Identifier glyph='washing-machine' modifier='circle'
                        size='m' />
                    <Identifier glyph='washing-machine' modifier='circle'
                        size='l' />
                    <Identifier glyph='washing-machine' modifier='circle'
                        size='xl' />
                    <Identifier glyph='washing-machine' modifier='circle'
                        size='xxl' />
                </div>
            </DocsTile>
            <DocsText>{circleCode}</DocsText>

            <Separator />

            <h2>Background image</h2>
            <DocsTile centered>
                <div className='fd-doc__margin--identifier'>
                    <Identifier backgroundImageUrl='https://placeimg.com/400/400/nature' modifier='circle'
                        size='xxs' />
                    <Identifier backgroundImageUrl='https://placeimg.com/400/400/nature' modifier='circle'
                        size='xs' />
                    <Identifier backgroundImageUrl='https://placeimg.com/400/400/nature' modifier='circle'
                        size='s' />
                    <Identifier backgroundImageUrl='https://placeimg.com/400/400/nature' modifier='circle'
                        size='m' />
                    <Identifier backgroundImageUrl='https://placeimg.com/400/400/nature' modifier='circle'
                        size='l' />
                    <Identifier backgroundImageUrl='https://placeimg.com/400/400/nature' modifier='circle'
                        size='xl' />
                    <Identifier backgroundImageUrl='https://placeimg.com/400/400/nature' modifier='circle'
                        size='xxl' />
                </div>
            </DocsTile>
            <DocsText>{backgroundImageCode}</DocsText>

            <Separator />

            <h2>Transparent</h2>
            <DocsTile centered>
                <div className='fd-doc__margin--identifier'>
                    <Identifier label='Wendy Wallace' modifier='transparent'
                        size='m'>WW</Identifier>
                    <Identifier glyph='washing-machine' modifier='transparent'
                        size='l' />
                </div>
            </DocsTile>
            <DocsText>{transparentCode}</DocsText>

            <Separator />

            <h2>Accent Colors</h2>
            <DocsTile centered>
                <div className='fd-doc__margin--identifier'>
                    <Identifier color={1} glyph='money-bills'
                        size='m' />
                    <Identifier color={2} glyph='money-bills'
                        size='m' />
                    <Identifier color={3} glyph='money-bills'
                        size='m' />
                    <Identifier color={4} glyph='money-bills'
                        size='m' />
                    <Identifier color={5} glyph='money-bills'
                        size='m' />
                    <Identifier color={6} glyph='money-bills'
                        size='m' />
                    <Identifier color={7} glyph='money-bills'
                        size='m' />
                    <Identifier color={8} glyph='money-bills'
                        size='m' />
                    <Identifier color={9} glyph='money-bills'
                        size='m' />
                </div>
            </DocsTile>
            <DocsText>{accentColorsCode}</DocsText>

            <Separator />

            <h2>Playground</h2>
            <Playground component='identifier' schema={[
                {
                    attribute: 'size',
                    typeOfAttribute: 'string',
                    'enum': ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']
                },
                {
                    attribute: 'glyph',
                    typeOfAttribute: 'string',
                    'enum': ['',
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
                        'zoom-out']
                },
                {
                    attribute: 'color',
                    typeOfAttribute: 'number',
                    'enum': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
                },
                {
                    attribute: 'children',
                    typeOfAttribute: 'string'
                },
                {
                    attribute: 'modifier',
                    typeOfAttribute: 'string',
                    'enum': ['circle', 'transparent']
                }]}>
                <Identifier color={1} glyph='money-bills'
                    label='Wendy Wallace' modifier='circle'
                    size='s' />
            </Playground>
        </div>
    );
};
