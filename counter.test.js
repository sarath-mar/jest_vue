// MyComponent.spec.js
import { mount, createLocalVue } from '@vue/test-utils';
import counter from './counter';
import mycomponent from "./MyComponent"
import Vue from 'vue';
const localVue = createLocalVue();
describe('counter', () => {
    it('renders correctly', async () => {
        const wrapper = mount(counter,{localVue});
        // await wrapper.vm.$nextTick();
        // expect(wrapper.html()).toContain('Your expected HTML content');
    });})
