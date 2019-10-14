import { mount } from 'enzyme';

//this deep dive is due to the components being wrapped with withStyles wrapper + forwarding refs
export const mountComponentWithStyles = (element) => {
    return mount(element).children().children();
};
