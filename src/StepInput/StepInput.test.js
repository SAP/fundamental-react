import FormGroup from '../Forms/FormGroup';
import FormItem from '../Forms/FormItem';
import FormLabel from '../Forms/FormLabel';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { StepInput } from '../';

describe('<InputGroup />', () => {
    const stepInputComponent = (
        <FormGroup>
            <FormLabel>Step Input</FormLabel>
            <FormItem>
                <StepInput />
            </FormItem>
        </FormGroup>
    );

    test('create input group items', () => {
        // create input text before
        let component = renderer.create(stepInputComponent);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    let setup = (props) => {
        return mount( <StepInput {...props} />);
    };

    describe('Default Rendering', () => {
        let element = setup();

        it('should render', () => {
            expect(
                element
            ).toBeDefined();
        });

        it('should render a div tag by default', () => {
            expect(
                element.getDOMNode().tagName
            ).toBe('DIV');
        });

        it('should have a default class of "fd-input-group"', () => {
            expect(
                element.getDOMNode().className
            ).toContain('fd-input-group');
        });
    });

    describe('Rendering with Props', () => {
        it('should allow data attribute to be passed to the element', () => {
            const element = setup({
                'data-sample': 'Sample'
            });
            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        it('should create form input', () => {
            let element = setup();

            expect(
                element.getDOMNode().className
            ).toContain('fd-input-group');
            expect(
                element.getDOMNode().className
            ).toContain('fd-input-group--control');
        });
    });
});
