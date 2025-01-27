import GenericText from "../genericText";
import { InputProps } from "./input.model";

const Input = ({
  label,
  name,
  value,
  type = "text",
  placeholder,
  isLoading = false,
  className,
  onChange,
  onInput,
  onBlur,
  onFocus,
  onClear,
  onKeyDown,
}: InputProps) => {

  return (
    <div className="w-full" >
      {label && (
        <GenericText className="mb-[14px]">
          <label>{label}</label>
        </GenericText>
      )}
      <div className="w-full">
        <input
        className={`h-[40px] xl:h-[50px] border border-[#74788D] rounded-[4px] w-full px-[15px] text-[#74788D] text-14 outline-none ${className}`}
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
        />
        {onClear && (
          <button
            type="button"
            className="input-clear-button"
            onClick={onClear}
          >
            Clear
          </button>
        )}
      </div>
      {/* Example of showing error */}
      {isLoading && <p className="input-loading">Loading...</p>}
    </div>
  );
};

export default Input;
