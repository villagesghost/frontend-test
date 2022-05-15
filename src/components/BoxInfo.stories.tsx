import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BoxInfo } from './BoxInfo';

export default {
    title: 'Component/BoxInfo',
    component: BoxInfo
} as ComponentMeta<typeof BoxInfo>;

const Template: ComponentStory<typeof BoxInfo> = (args) => <BoxInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
    checked: false,
    image: 'https://mui.com/static/images/cards/paella.jpg',
    imagePosition: 'top',
    title: 'Lizard',
    description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    align: 'left',
    vertical: 'top'
}
