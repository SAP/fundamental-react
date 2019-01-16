import { Modal } from './Modal';
import { mount } from 'enzyme';
import React from 'react';

describe('<Modal />', () => {
    const mockOnClose = jest.fn();
    const bShow = true;
    const modalInfoTitle = 'Product Added';
    const modalConfirmTitle = 'Delete';
    const modalFormTitle = 'Invite User';
    const infoModal = (
        <Modal
            className='blue'
            onClose={mockOnClose}
            show={bShow}
            title={modalInfoTitle}>
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
        </Modal>
    );

    const infoNoShowModal = (
        <Modal onClose={mockOnClose} show={!bShow}
            title={modalInfoTitle}>
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
        </Modal>
    );

    const confirmModal = (
        <Modal
            actions={
                <React.Fragment>
                    <button>No Way</button>
                    <button>Sure</button>
                </React.Fragment>
            }
            onClose={mockOnClose}
            show={bShow}
            title={modalConfirmTitle}>
            <div>
                Do you want to delete item <b>X</b>?
            </div>
        </Modal>
    );

    const formModal = (
        <Modal
            actions={
                <React.Fragment>
                    <button>Cancel</button>
                    <button>Invite</button>
                </React.Fragment>
            }
            onClose={mockOnClose}
            show={bShow}
            title={modalFormTitle}>
            <div className='fd-form__group'>
                <div className='fd-form__item'>
                    <label className='fd-form__label is-required'>Email</label>
                    <input className='fd-form__control' type='text' />
                </div>
            </div>
        </Modal>
    );

    let component;

    afterEach(() => {
        component.unmount();
    });

    test('create information modal', () => {
        component = mount(infoModal);
        expect(component.find('h1.fd-modal__title').text()).toEqual(modalInfoTitle);

        // close modal
        component.find('button.fd-button--light.fd-modal__close').simulate('click');
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

    test('create confirm modal', () => {
        component = mount(confirmModal);
        expect(component.find('h1.fd-modal__title').text()).toEqual(
            modalConfirmTitle
        );
    });

    test('create form modal', () => {
        component = mount(formModal);
        expect(component.find('h1.fd-modal__title').text()).toEqual(modalFormTitle);
    });

    test('do not show info modal', () => {
        component = mount(infoNoShowModal);
        expect(component.find('h1.fd-modal__title').exists()).toBeFalsy();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the Modal component', () => {
            component = mount(
                <Modal
                    data-sample='Sample'
                    show
                    title='Title' />
            );

            expect(
                component.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        xtest('should allow props to be spread to the Modal component\'s h1 element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the Modal component\'s button element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });
    });
});
