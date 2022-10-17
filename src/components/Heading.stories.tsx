import { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from './Heading';

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Heading com tag H2',
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

} as Meta<HeadingProps>

export const Default: StoryObj = {  };

export const Small: StoryObj<HeadingProps> = {
    args:{
        size: 'sm'
    }
};

export const Large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg'
    }
};

export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Testando H1</h1>
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