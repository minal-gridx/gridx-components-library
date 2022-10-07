import React from 'react';

import CustomButton from './CustomButton';

export default {
    title: 'Example/Button',
    component: CustomButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <CustomButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'My Button',
};