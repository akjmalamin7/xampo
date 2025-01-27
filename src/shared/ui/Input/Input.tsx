import { forwardRef } from "react";
import GenericText from "../genericText";
import { InputProps } from "./input.model";

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      name,
      value,
      type = "text",
      placeholder = "",
      isLoading = false,
      className = "",
      onChange,
      onInput,
      onBlur,
      onFocus,
      onClear,
      onKeyDown,
    },
    ref
  ) => {
    return (
      <div className="w-full">
        {label && (
          <GenericText className="mb-[14px]">
            <label htmlFor={name}>{label}</label>
          </GenericText>
        )}
        <div className="relative w-full">
          <input
            id={name}
            name={name}
            value={value}
            type={type}
            placeholder={placeholder}
            disabled={isLoading}
            onChange={onChange}
            onInput={onInput}
            onBlur={onBlur}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
            ref={ref}
            className={`h-[40px] xl:h-[50px] border border-[#74788D] rounded-[4px] w-full px-[15px] text-[#74788D] text-14 outline-none ${className}`}
          />
          {onClear && (
            <button
              type="button"
              className="absolute top-1/2 right-[10px] transform -translate-y-1/2 text-[#74788D] hover:text-red-500"
              onClick={onClear}
            >
              ✕
            </button>
          )}
        </div>
        {isLoading && (
          <p className="mt-2 text-sm text-gray-500">Loading...</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input"; // ForwardRef-এ একটি নাম সংযুক্ত করা ভালো অভ্যাস।

export default Input;
