import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from "./Button";

export default {
    title: 'Component/Button',
    component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Default button',
    variant: 'default'
}

export const Success = Template.bind({});
Success.args = {
    title: 'Success Button',
    variant: 'success'
}