import React from 'react';
import { Input } from '@/components/ui/input';
import { InputGroupInput } from '@/components/ui/input-group';

export function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  variant = 'standalone',
  ...props
}: {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
  variant?: 'group' | 'standalone';
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
  const [value, setValue] = React.useState(initialValue);
  const Comp = variant === 'standalone' ? Input : InputGroupInput;

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return <Comp {...props} value={value} onChange={(e) => setValue(e.target.value)} />;
}
