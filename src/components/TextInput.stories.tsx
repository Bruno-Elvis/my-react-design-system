import { Meta, StoryObj } from '@storybook/react';
import { TextInput, TextInputRootProps } from './TextInput';
import { Envelope } from 'phosphor-react';

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: [
            <TextInput.Icon>
                <Envelope />
            </TextInput.Icon>,
            <TextInput.Input placeholder='Insira seu e-mail' type={'email'} />
        ]

        /* Ou (implementação sem utilizar fragment do react, deixando mais limpa as tag react): (
            <>
                <TextInput.Icon>
                    <Envelope />
                </TextInput.Icon>
                <TextInput.Input placeholder='Insira seu e-mail' type={'email'} />
            </>
        ),*/
    },

    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }

} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {};

export const WithoutIcon: StoryObj<TextInputRootProps> = {
    args: {
        children: <TextInput.Input placeholder='Insira seu e-mail' type={'email'} />
    }
};