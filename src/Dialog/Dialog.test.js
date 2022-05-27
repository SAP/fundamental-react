import Button from '../Button/Button';
import Dialog from './Dialog';
import { mount } from 'enzyme';
import React from 'react';

window.HTMLElement.prototype.scroll = () => {};
describe('<Dialog />', () => {
    const mockOnClose = jest.fn();
    const bShow = true;
    const dialogInfoTitle = 'Product Added';
    const dialogConfirmTitle = 'Delete';
    const dialogFormTitle = 'Invite User';
    const infoDialog = (
        <Dialog
            actions={[
                (<Button option='transparent'>No</Button>),
                (<Button>Yes</Button>)
            ]}
            className='blue'
            onClose={mockOnClose}
            show={bShow}
            title={dialogInfoTitle}>
            <div>
                <b>The new product have been added to your catalog.</b>
                <br />
                <br />
                Automatic Product ID: <b>PD-3465334</b>
                <br />
                <br />
                Expiration date: <b>13/03/2018</b>
                <br />
                <br />
            </div>
        </Dialog>
    );

    const infoNoShowDialog = (
        <Dialog
            actions={[
                (<Button option='transparent'>No</Button>),
                (<Button>Yes</Button>)
            ]}
            onClose={mockOnClose} show={!bShow}
            title={dialogInfoTitle}>
            <div>
                <b>The new product have been added to your catalog.</b>
                <br />
                <br />
                Automatic Product ID: <b>PD-3465334</b>
                <br />
                <br />
                Expiration date: <b>13/03/2018</b>
                <br />
                <br />
            </div>
        </Dialog>
    );

    const confirmDialog = (
        <Dialog
            actions={[
                (<Button option='transparent'>No</Button>),
                (<Button>Yes</Button>)
            ]}
            onClose={mockOnClose}
            show={bShow}
            title={dialogConfirmTitle}>
            <div>
                Do you want to delete item <b>X</b>?
            </div>
        </Dialog>
    );

    const formDialog = (
        <Dialog
            actions={[
                (<Button option='transparent'>No</Button>),
                (<Button>Yes</Button>)
            ]}
            onClose={mockOnClose}
            show={bShow}
            title={dialogFormTitle}>
            <div className='fd-form__group'>
                <div className='fd-form__item'>
                    <label className='fd-form__label is-required'>Email</label>
                    <input className='fd-form__control' type='text' />
                </div>
            </div>
        </Dialog>
    );

    let component;

    afterEach(() => {
        component.unmount();
    });

    test('create information dialog', () => {
        component = mount(infoDialog);
        expect(component.find('.fd-title').text()).toEqual(dialogInfoTitle);

        // close dialog
        component.find('button.fd-dialog__decisive-button').at(0).simulate('click');
        expect(component.prop('onClose')).toBeCalledTimes(1);

        // handle esc key
        let event = new KeyboardEvent('keydown', { key: 'Escape' });
        document.dispatchEvent(event);
        expect(component.prop('onClose')).toBeCalledTimes(2);

        // handle esc key
        event = new KeyboardEvent('keydown', { key: 'Esc' });
        document.dispatchEvent(event);
        expect(component.prop('onClose')).toBeCalledTimes(3);

        // testing when a key besides Escape/Esc is pressed
        event = new KeyboardEvent('keydown', { key: 'Enter' });
        document.dispatchEvent(event);
        expect(component.prop('onClose')).toBeCalledTimes(3);
    });

    test('create confirm dialog', () => {
        component = mount(confirmDialog);
        expect(component.find('.fd-title').text()).toEqual(
            dialogConfirmTitle
        );
    });

    test('create form dialog', () => {
        component = mount(formDialog);
        expect(component.find('.fd-title').text()).toEqual(dialogFormTitle);
    });

    test('do not show info dialog', () => {
        component = mount(infoNoShowDialog);
        expect(component.find('.fd-title').exists()).toBeFalsy();
    });

    describe('Dialog Headings', () => {
        test('should allow customization of header level', () => {
            component = mount(
                <Dialog
                    actions={[
                        (<Button option='transparent'>No</Button>),
                        (<Button>Yes</Button>)
                    ]}
                    headingLevel={2}
                    show
                    title='Sample' />);

            expect(
                component.find('.fd-title').type()
            ).toBe('h2');
        });
    });

    describe('Custom class names', () => {
        test('should allow classes to be added to backdrop', () => {
            component = mount(<Dialog
                actions={[
                    (<Button option='transparent'>No</Button>),
                    (<Button>Yes</Button>)
                ]}
                backdropClassName='sample' show
                title='Title' />);

            expect(component.find('.sample').exists()).toBe(true);
        });

        test('should allow classes to be added to dialog', () => {
            component = mount(<Dialog
                actions={[
                    (<Button option='transparent'>No</Button>),
                    (<Button>Yes</Button>)
                ]}
                className='sample' show
                title='Title' />);

            expect(component.find('div.fd-dialog').hasClass('sample')).toBe(true);
        });
    });


    describe('Prop spreading', () => {
        test('should allow props to be spread to the Dialog component', () => {
            component = mount(
                <Dialog
                    actions={[
                        (<Button option='transparent'>No</Button>),
                        (<Button>Yes</Button>)
                    ]}
                    data-sample='Sample' show
                    title='Title' />
            );

            expect(component.exists('div[data-sample="Sample"]')).toBe(true);
        });

        test('should allow props to be spread to the Dialog component\'s content section', () => {
            component = mount(
                <Dialog
                    actions={[
                        (<Button option='transparent'>No</Button>),
                        (<Button>Yes</Button>)
                    ]}
                    contentProps={{ 'data-sample': 'Sample Title' }}
                    show
                    title='Title' />
            );

            expect(
                component.find('div.fd-dialog__content').getDOMNode().attributes[
                    'data-sample'
                ].value
            ).toBe('Sample Title');
        });

        test('should allow props to be spread to the Dialog component\'s header section', () => {
            component = mount(
                <Dialog
                    actions={[
                        (<Button option='transparent'>No</Button>),
                        (<Button>Yes</Button>)
                    ]}
                    headerProps={{ 'data-sample': 'Sample Title' }}
                    show
                    title='Title' />
            );

            expect(
                component.find('div.fd-dialog__header').getDOMNode().attributes[
                    'data-sample'
                ].value
            ).toBe('Sample Title');
        });

        test('should allow props to be spread to the Dialog component\'s header element', () => {
            component = mount(
                <Dialog
                    actions={[
                        (<Button option='transparent'>No</Button>),
                        (<Button>Yes</Button>)
                    ]}
                    show
                    title='Title'
                    titleProps={{ 'data-sample': 'Sample Title' }} />
            );

            expect(
                component.find('.fd-title').getDOMNode().attributes['data-sample']
                    .value
            ).toBe('Sample Title');
        });

        test('should allow props to be spread to the Dialog component\'s body section', () => {
            // TODO: placeholder for this test description once that functionality is built
            component = mount(
                <Dialog
                    actions={[
                        (<Button option='transparent'>No</Button>),
                        (<Button>Yes</Button>)
                    ]}
                    bodyProps={{ 'data-sample': 'Sample Title' }}
                    show
                    title='Title' />
            );

            expect(
                component.find('div.fd-dialog__body').getDOMNode().attributes[
                    'data-sample'
                ].value
            ).toBe('Sample Title');
        });

        test('should allow props to be spread to the Dialog component\'s footer section', () => {
            // TODO: placeholder for this test description once that functionality is built
            component = mount(
                <Dialog
                    actions={[
                        (<Button option='transparent'>No</Button>),
                        (<Button>Yes</Button>)
                    ]}
                    footerProps={{ 'data-sample': 'Sample Title' }}
                    show
                    title='Title' />
            );

            expect(
                component.find('footer').getDOMNode().attributes['data-sample']
                    .value
            ).toBe('Sample Title');
        });
    });
});
