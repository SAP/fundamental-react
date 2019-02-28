import path from 'path';
import React from 'react';
import { Toggle } from '../';
import { ComponentPage, Example } from '../_playground';

export const ToggleComponent = () => {
    return (
        <ComponentPage
            description={`The **Toggle** component is used to activate or deactivate an element. It uses a visual metaphor that is known
                to the user with visible differences between on and off state. It is recommended to always display the
                toggle with a label above it as well as the label of the selected state. For example, the label above
                would be "Active", the toggle state would be “on” and the selected state label displayed to the right of
                the toggle would be “Yes”.`}
            sourceModulePath={path.join(__dirname, './Toggle')}
            title='Toggle'>

            <Example
                description={`The toggle can be set to 4 sizes: 'xs', 's', 'm' and 'l'. When used 
                    with forms, it is recommended to use the small size so that form components will be
                    consistent.`}
                title='Sizes'>
                <div>
                    <Toggle id='Yj07w604' size='xs'>
                        Extra Small toggle
                    </Toggle>
                    <Toggle checked id='Yj07w605'
                        size='s'>
                        Small toggle
                    </Toggle>
                    <Toggle id='Yj07w606'>Normal toggle</Toggle>
                    <Toggle checked id='Yj07w607'
                        size='l'>
                        Large toggle
                    </Toggle>
                </div>
            </Example>

            <Example
                title='Disabled State'>
                <div>
                    <Toggle disabled id='Yj07w608'
                        size='xs'>
                        Extra Small toggle
                    </Toggle>
                    <Toggle checked disabled
                        id='Yj07w609' size='s'>
                        Small toggle
                    </Toggle>
                    <Toggle disabled id='Yj07w610'>
                        Normal toggle
                    </Toggle>
                    <Toggle checked disabled
                        id='Yj07w611' size='l'>
                        Large toggle
                    </Toggle>
                </div>
            </Example>

        </ComponentPage>
    );
};
