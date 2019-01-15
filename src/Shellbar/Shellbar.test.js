import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { Shellbar } from './Shellbar';

describe('<Shellbar />', () => {
    const profile1 = {
        initials: 'JS',
        userName: 'John Snow',
        colorAccent: 8
    };

    const profileMenu = [
        {
            name: 'Settings',
            glyph: 'action-settings',
            size: 's',
            callback: () => alert('Settings selected!')
        },
        {
            name: 'Sign Out',
            glyph: 'log',
            size: 's',
            callback: () => alert('Sign Out selected!')
        }
    ];

    const simpleShellBar = (
        <Shellbar
            logo={
                <img
                    src='//unpkg.com/fiori-fundamentals/dist/images/sap-logo.png'
                    alt='SAP' />
            }
            productTitle='Corporate Portal'
            profile={profile1}
            profileMenu={profileMenu} />
    );

    const simpleShellBarWithClass = (
        <Shellbar
            className='blue'
            logo={
                <img
                    src='//unpkg.com/fiori-fundamentals/dist/images/sap-logo.png'
                    alt='SAP' />
            }
            productTitle='Corporate Portal'
            profile={profile1}
            profileMenu={profileMenu} />
    );

    test('create shellbar', () => {
        let component = renderer.create(simpleShellBar);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(simpleShellBarWithClass);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        xtest('should allow props to be spread to the Shellbar component', () => {
            // TODO: placeholder for this test description once that functionality is built

            // NOTE: there are numerous other elements and components contained within Shellbar
            // so there should be tests added for each once the functionality is present.

            const element = mount(<Shellbar data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
