import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export interface CheckboxProps {  };

export function Checkbox(props: CheckboxProps) {
    return (
        <CheckboxPrimitive.Root className='w-6 h-6 p-[2px] bg-stone-800 rounded focus:ring-2 ring-stone-50'>
            <CheckboxPrimitive.Indicator>
                <Check weight='bold' className='h-5 w-5 text-stone-50' />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    );
};