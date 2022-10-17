import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from './Text';

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Texto com tag P',
        size: 'md'
    },

    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        },

    }

} as Meta<TextProps>

export const Default: StoryObj = {  };

export const Small: StoryObj<TextProps> = {
    args:{
        size: 'sm'
    }
};

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
};

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Testando P</p>
        )
    },

    /* Remover da table de controle (Controls) informações do elemento HTML (componente) */
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },

        asChild: {
            table: {
                disable: true
            }
        }
    }
};