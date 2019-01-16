import React from 'react';
import { Badge, Button, Counter, Label, Status } from '../';
import { Description, DocsText, DocsTile, Header, Import, Playground, Properties, Separator } from '../_playground';

export const BadgeComponent = () => {
    const defaultBadgeCode = `<Badge>Default</Badge>
<Badge type="success">Default</Badge>
<Badge type="warning">Default</Badge>
<Badge type="error">Default</Badge>`;

    const pillBadgeCode = `<Badge modifier="pill">Default</Badge>
<Badge type="success" modifier="pill">Default</Badge>
<Badge type="warning" modifier="pill">Default</Badge>
<Badge type="error" modifier="pill">Default</Badge>`;

    const filledBadgeCode = `<Badge modifier="filled">Default</Badge>
<Badge type="success" modifier="filled">Default</Badge>
<Badge type="warning" modifier="filled">Default</Badge>
<Badge type="error" modifier="filled">Default</Badge>`;

    const labelCode = `<Label>Default</Label>
<Label type="success">Default</Label>
<Label type="warning">Default</Label>
<Label type="error">Default</Label>`;

    const statusCode = `<Status>Default</Status>
<Status type="success">Default</Status>
<Status type="warning">Default</Status>
<Status type="error">Default</Status>


<Status type="available">Available</Status>
<Status type="away">Away</Status>
<Status type="busy">Busy</Status>
<Status type="offline">Appear Offline</Status>`;

    const statusIconCode = `<Status glyph="history">Custom Icon</Status>
<Status glyph="message-success">Success</Status>
<Status glyph="message-warning">Warning</Status>
<Status glyph="message-error">Error</Status>`;

    const defaultCounterCode = `<Counter>5</Counter>
<Counter>25</Counter>
<Counter>101</Counter>
<Counter>999+</Counter>`;

    const notificationCounterCode = `<Button option="light" glyph="bell">
  <Counter notification>5</Counter>
</Button>
<Button option="light" glyph="bell">
  <Counter notification>25</Counter>
</Button>
<Button option="light" glyph="bell">
  <Counter notification>101</Counter>
</Button>
<Button option="light" glyph="bell">
  <Counter notification>999+</Counter>
</Button>`;

    const inlineCounterCode = '<p>Lorem ipsum <Counter>5</Counter></p>';

    return (
        <div>
            <Header>Status Indicators</Header>
            <Description>Status Indicators are used to easily highlight the state of an object.</Description>
            <Import module='Badge, Label, Status, Counter' path='/fundamental-react/src/' />

            <Separator />

            <Properties
                properties={[
                    {
                        name: 'type',
                        description:
                            'string - The type indicates the status of the badge/label. Options include \'default\', \'success\', \'warning\', and \'error\'. Leave empty for default. For status label with build in status icons use the \'available\', \'away\', \'busy\' and \'offline\'.'
                    },
                    {
                        name: 'modifier',
                        description: 'string - Modifiers can be \'pill\' and \'filled\'. Leave empty for normal.'
                    },
                    {
                        name: 'glyph',
                        description:
                            'string - The icon to include in the status indicator. See the icon page for the list of icons.'
                    },
                    {
                        name: 'notification',
                        description: 'bool - Set to \'true\' to enable counter with notification. '
                    }
                ]}
                type='Inputs' />

            <Separator />

            <h2>Default Badge</h2>
            <DocsTile centered>
                <div className='fd-doc__margin--statusIndicator'>
                    <Badge>Default</Badge>
                    <Badge type='success'>Default</Badge>
                    <Badge type='warning'>Default</Badge>
                    <Badge type='error'>Default</Badge>
                </div>
            </DocsTile>
            <DocsText>{defaultBadgeCode}</DocsText>

            <Separator />

            <h2>Pill Badge</h2>
            <Description>
                Apply <code>modifier="pill"</code> to render a pill version of the badge.
            </Description>
            <DocsTile centered>
                <div className='fd-doc__margin--statusIndicator'>
                    <Badge modifier='pill'>Default</Badge>
                    <Badge modifier='pill' type='success'>
                        Default
                    </Badge>
                    <Badge modifier='pill' type='warning'>
                        Default
                    </Badge>
                    <Badge modifier='pill' type='error'>
                        Default
                    </Badge>
                </div>
            </DocsTile>
            <DocsText>{pillBadgeCode}</DocsText>

            <Separator />

            <h2>Filled Badge</h2>
            <Description>
                Apply <code>modifier="filled"</code> to render a filled version of the badge.
            </Description>
            <DocsTile centered>
                <div className='fd-doc__margin--statusIndicator'>
                    <Badge modifier='filled'>Default</Badge>
                    <Badge modifier='filled' type='success'>
                        Default
                    </Badge>
                    <Badge modifier='filled' type='warning'>
                        Default
                    </Badge>
                    <Badge modifier='filled' type='error'>
                        Default
                    </Badge>
                </div>
            </DocsTile>
            <DocsText>{filledBadgeCode}</DocsText>

            <Separator />

            <h2>Label</h2>
            <DocsTile centered>
                <div className='fd-doc__margin--statusIndicator'>
                    <Label>Default</Label>
                    <Label type='success'>Default</Label>
                    <Label type='warning'>Default</Label>
                    <Label type='error'>Default</Label>
                </div>
            </DocsTile>
            <DocsText>{labelCode}</DocsText>

            <Separator />

            <h2>Status Indicator Label with build in status icons</h2>
            <DocsTile centered>
                <div className='fd-doc__margin--statusIndicator'>
                    <Status>Default</Status>
                    <Status type='success'>Default</Status>
                    <Status type='warning'>Default</Status>
                    <Status type='error'>Default</Status>
                    <br />
                    <br />
                    <Status type='available'>Available</Status>
                    <Status type='away'>Away</Status>
                    <Status type='busy'>Busy</Status>
                    <Status type='offline'>Appear Offline</Status>
                </div>
            </DocsTile>
            <DocsText>{statusCode}</DocsText>
            <Separator />
            <h2>Status Indicator Label with any icons</h2>
            <DocsTile centered>
                <div className='fd-doc__margin--statusIndicator'>
                    <Status glyph='history'>Custom Icon</Status>
                    <Status glyph='message-success'>Success</Status>
                    <Status glyph='message-warning'>Warning</Status>
                    <Status glyph='message-error'>Error</Status>
                </div>
            </DocsTile>
            <DocsText>{statusIconCode}</DocsText>

            <Separator />

            <h2>Default Counter</h2>
            <Description>Counter has a minimum value 1. Maximum display is 999+</Description>
            <DocsTile centered>
                <div className='fd-doc__margin--statusIndicator'>
                    <Counter>5</Counter>
                    <Counter>25</Counter>
                    <Counter>101</Counter>
                    <Counter>999+</Counter>
                </div>
            </DocsTile>
            <DocsText>{defaultCounterCode}</DocsText>

            <Separator />

            <h2>Counter inline with a paragraph</h2>
            <DocsTile centered>
                <div className='fd-doc__margin--statusIndicator'>
                    <p>
                        Lorem ipsum <Counter>5</Counter>
                    </p>
                </div>
            </DocsTile>
            <DocsText>{inlineCounterCode}</DocsText>

            <Separator />

            <h2>Notification counter</h2>
            <Description>Use the property 'notification' to enable notification counter.</Description>
            <DocsTile centered>
                <div className='fd-doc__margin--statusIndicator'>
                    <Button glyph='bell' option='light'>
                        <Counter notification>5</Counter>
                    </Button>
                    <Button glyph='bell' option='light'>
                        <Counter notification>25</Counter>
                    </Button>
                    <Button glyph='bell' option='light'>
                        <Counter notification>101</Counter>
                    </Button>
                    <Button glyph='bell' option='light'>
                        <Counter notification>999+</Counter>
                    </Button>
                </div>
            </DocsTile>
            <DocsText>{notificationCounterCode}</DocsText>

            <Separator />

            <h2>Playground</h2>
            <Playground
                component='badge'
                schema={[
                    {
                        attribute: 'children',
                        typeOfAttribute: 'string'
                    },
                    {
                        attribute: 'component',
                        typeOfAttribute: 'string',
                        'enum': ['badge', 'label', 'status']
                    },
                    {
                        attribute: 'type',
                        typeOfAttribute: 'string',
                        'enum': ['default', 'success', 'warning', 'error', 'available', 'away', 'busy', 'offline']
                    },
                    {
                        attribute: 'modifier',
                        typeOfAttribute: 'string',
                        'enum': ['', 'pill', 'filled']
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
                    }
                ]}>
                <Badge glyph='message-error' modifier='filled'
                    type='success'>
                    Default
                </Badge>
            </Playground>
            <Separator />
        </div>
    );
};
