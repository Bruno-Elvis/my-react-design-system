import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxProps } from './Checkbox';
import { Text } from './Text';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {
        
    },

    argTypes: {
        
    },

    decorators: [
        (Story) => {
            return (
                <span className='flex items-center gap-2'>
                    {Story()}
                    <Text size='sm'>Lembrar minhas credenciais por 30 dias</Text>
                </span>
            )
        }
    ]

} as Meta<CheckboxProps>

export const Default: StoryObj = {  };