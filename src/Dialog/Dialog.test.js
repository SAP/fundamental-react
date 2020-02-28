import Dialog from './Dialog';
import { mount } from 'enzyme';
import React from 'react';

describe('<Dialog />', () => {
    const mockOnClose = jest.fn();
    const bShow = true;
    const dialogInfoTitle = 'Product Added';
    const dialogConfirmTitle = 'Delete';
    const dialogFormTitle = 'Invite User';
    const infoDialog = (
        <Dialog
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
        <Dialog onClose={mockOnClose} show={!bShow}
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
            actions={
                <React.Fragment>
                    <button>No Way</button>
                    <button>Sure</button>
                </React.Fragment>
            }
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
            actions={
                <React.Fragment>
                    <button>Cancel</button>
                    <button>Invite</button>
                </React.Fragment>
            }
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
        expect(component.find('.fd-dialog__title').text()).toEqual(dialogInfoTitle);

        // close dialog
        component.find('button.fd-button--light.fd-dialog__close').simulate('click');
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
        expect(component.find('.fd-dialog__title').text()).toEqual(
            dialogConfirmTitle
        );
    });

    test('create form dialog', () => {
        component = mount(formDialog);
        expect(component.find('.fd-dialog__title').text()).toEqual(dialogFormTitle);
    });

    test('do not show info dialog', () => {
        component = mount(infoNoShowDialog);
        expect(component.find('.fd-dialog__title').exists()).toBeFalsy();
    });

    describe('Dialog Headings', () => {
        test('should allow customization of header level', () => {
            component = mount(
                <Dialog headingLevel={2}
                    show
                    title='Sample' />);

            expect(
                component.find('.fd-dialog__title').type()
            ).toBe('h2');
        });
    });

    describe('Custom class names', () => {
        test('should allow classes to be added to backdrop', () => {
            component = mount(<Dialog backdropClassName='sample' show
                title='Title' />);

            expect(component.find('div.fd-overlay--dialog').hasClass('sample')).toBe(true);
        });

        test('should allow classes to be added to dialog', () => {
            component = mount(<Dialog className='sample' show
                title='Title' />);

            expect(component.find('div.fd-dialog').hasClass('sample')).toBe(true);
        });
    });


    describe('Prop spreading', () => {
        test('should allow props to be spread to the Dialog component', () => {
            component = mount(
                <Dialog data-sample='Sample' show
                    title='Title' />
            );

            expect( component.find('div.fd-overlay--dialog').getDOMNode().attributes[
                'data-sample'
            ].value).toBe(
                'Sample'
            );
        });

        test('should allow props to be spread to the Dialog component\'s content section', () => {
            component = mount(
                <Dialog
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
                    show
                    title='Title'
                    titleProps={{ 'data-sample': 'Sample Title' }} />
            );

            expect(
                component.find('.fd-dialog__title').getDOMNode().attributes['data-sample']
                    .value
            ).toBe('Sample Title');
        });

        test('should allow props to be spread to the Dialog component\'s body section', () => {
            // TODO: placeholder for this test description once that functionality is built
            component = mount(
                <Dialog
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
                    actions={
                        <React.Fragment>
                            <button>Cancel</button>
                            <button>Invite</button>
                        </React.Fragment>
                    }
                    footerProps={{ 'data-sample': 'Sample Title' }}
                    show
                    title='Title' />
            );

            expect(
                component.find('footer').getDOMNode().attributes['data-sample']
                    .value
            ).toBe('Sample Title');
        });

        test('should allow props to be spread to the Dialog component\'s button element', () => {
            // TODO: placeholder for this test description once that functionality is built
            component = mount(
                <Dialog
                    closeProps={{ 'data-sample': 'Sample Button' }}
                    show
                    title='Title' />
            );

            expect(
                component.find('button').getDOMNode().attributes['data-sample']
                    .value
            ).toBe('Sample Button');
        });
    });
});
