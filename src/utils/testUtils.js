import { mount } from 'enzyme';

export const mountComponent = (element) => {
    return mount(element).children().children();
};
