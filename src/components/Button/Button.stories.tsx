import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Index';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const DefaultBtn = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultBtn.args = {
  variant: 'default'
};

export const OutlineBtn = Template.bind({});

OutlineBtn.args = {
    variant: 'outline',
    text: 'Outlined Button'
};

export const TextBtn = Template.bind({});
TextBtn.args = {
    variant: 'text',
    text: 'Button With text variant'
};

export const DisabledWithDefaultVariant = Template.bind({});
DisabledWithDefaultVariant.args = {
    isDisabled: true,
    text: 'Disabled button'
};

export const DisabledWithTextVariant = Template.bind({});
DisabledWithTextVariant.args = {
    isDisabled: true,
    variant: 'text',
    text: 'Disabled button with variant text'
};

export const DisableShadow = Template.bind({});
DisableShadow.args = {
    disableShadow: true,
    text: 'Disabled shadow button'
};

export const StartIconBtn = Template.bind({});
StartIconBtn.args = {
    text: 'Button with start icon',
    startIcon: 'local_grocery_store',
    color: 'primary'
};

export const EndIconBtn = Template.bind({});
EndIconBtn.args = {
    text: 'Button with end icon',
    endIcon: 'local_grocery_store',
    color: 'primary'
};

export const SmBtn = Template.bind({});
SmBtn.args = {
    text: 'Sm Btn',
    color: 'primary',
    size: 'sm'
};

export const MdBtn = Template.bind({});
MdBtn.args = {
    text: 'Md Btn',
    color: 'primary',
    size: 'md'
};

export const LgBtn = Template.bind({});
LgBtn.args = {
    text: 'Lg Btn',
    color: 'primary',
    size: 'lg'
};

export const ColorDefaultBtn = Template.bind({});
ColorDefaultBtn.args = {
    text: 'Color Default',
    color: 'default'
};

export const ColorPrimaryBtn = Template.bind({});
ColorPrimaryBtn.args = {
    text: 'Color Primary',
    color: 'primary'
};

export const ColorSecondaryBtn = Template.bind({});
ColorSecondaryBtn.args = {
    text: 'Color Secondary',
    color: 'secondary'
};

export const ColorDangerBtn = Template.bind({});
ColorDangerBtn.args = {
    text: 'Color Danger',
    color: 'danger'
};