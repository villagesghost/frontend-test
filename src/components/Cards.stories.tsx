import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Cards } from './Cards';

export default {
    title: 'Component/Cards',
    component: Cards
} as ComponentMeta<typeof Cards>;

const Template: ComponentStory<typeof Cards> = (args) => <Cards {...args} />;

export const Default = Template.bind({});
Default.args = {
    items: [{
        title: 'Flood zone 1',
        imgUrl: 'https://mui.com/static/images/cards/paella.jpg',
        checked: false
    }, {
        title: 'Flood zone 2',
        imgUrl: 'https://mui.com/static/images/cards/paella.jpg',
        checked: false
    }, {
        title: 'Flood zone 3',
        imgUrl: 'https://mui.com/static/images/cards/paella.jpg',
        checked: true
    }],
};