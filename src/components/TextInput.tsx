import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from '@radix-ui/react-slot';

/* Utilizando pattern de composição */

export interface TextInputRootProps {
    children: ReactNode
};

function TextInputRoot(props: TextInputRootProps) {
    return (
        <div className='flex items-center gap-3 h-12 py-4 px-3 rounded bg-stone-800 focus-within:ring-2 ring-stone-50'>
            {props.children}
        </div>
    );
};

export interface TextInputIconProps {
    children: ReactNode
};

function TextInputIcon (props: TextInputIconProps) {
    return (
        <Slot className='w-6 n-6 text-stone-600'>{ props.children }</Slot>
    )
};

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> { };

function TextInputInput(props: TextInputInputProps) {
    return (
        <input className='flex-1 bg-transparent text-stone-600 text-xs placeholder:text-stone-400 outline-none' {...props} />
    );
};

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
};