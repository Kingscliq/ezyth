// hello
import React, {
  ComponentProps,
  InputHTMLAttributes,
  JSXElementConstructor,
  useRef,
  useState,
} from 'react';

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onClick?: () => void;
  error?: boolean;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  success?: boolean;
  //   style?: React.CSSProperties | undefined | null;
  label?: string;
  inputRef?: string;
  message?: string;
  props?: ComponentProps<JSXElementConstructor<any>>;
}
const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onClick,
  error,
  className,
  onChange,
  name,
  success,
  label,
  inputRef,
  message,
  props,
}) => {
  // const inputRef = useRef();

  //   error
  //               ? {
  //                   backgroundColor: '#ffefed',
  //                   border: '1px solid #e11900',
  //                   color: 'rgba(15, 55, 90, 1)',
  //                 }
  //               : success
  //               ? {
  //                   border: '2px solid var(--secondary)',
  //                   color: 'var(--neutral-dark)',
  //                 }
  //               : null
  return (
    <div>
      <div>
        {label && (
          <label
            className="text-primary font-bold"
            style={{ color: error ? '#e11900 ' : '0' }}
          >
            {label}
          </label>
        )}

        <div
          className={[
            className,
            'border-[#c4c7fc93] border-[1px] rounded bg-transparent w-full h-12 my-1',
          ].join(' ')}
          style={{
            borderColor: error ? '#ffefed' : success ? '#2ecc71' : '0',
            backgroundColor: error ? '#ffefed' : success ? '#e11900' : '0',
            color: error ? 'rgba(15, 55, 90, 1)' : '0',
          }}
        >
          <input
            type={type || 'text'}
            className={
              'border-0 outline-none bg-transparent px-3 py-4 h-12 w-full'
            }
            placeholder={placeholder || 'this is a placeholder'}
            value={value}
            onClick={onClick}
            error={error}
            onChange={onChange}
            name={name}
            ref={inputRef}
            {...props}
          />
        </div>
      </div>
      {error && <small style={{ color: '#e11900' }}>{message}</small>}
    </div>
  );
};

export default Input;
