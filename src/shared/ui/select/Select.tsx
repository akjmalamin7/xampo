import { useEffect, useState } from "react";
import GenericText from "../genericText";
import { SelectProps } from "./select.model";

const Select = ({
  label,
  value,
  options,
  disabled,
  error,
  className,
  onBlur,
  onFocus,
  onSelect,
}: SelectProps) => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    if (typeof onSelect === "function") {
      onSelect(event.target.value);
    }
  };

  //? @___Mount Effects___@
  useEffect(() => {
    if (!value) {
      setSelectedValue("");
      return;
    }
    setSelectedValue(value);
  }, [value, options]);

  return (
    <div className={className}>
      {label && (
        <GenericText>
          <label>{label}</label>
        </GenericText>
      )}
      <select
        disabled={disabled}
        value={selectedValue}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={handleSelectChange}
        className="h-[40px] border border-[#74788D] rounded-[4px] w-full px-[15px] text-[#74788D] text-14 outline-none mt-[12px]"
      >
        {options?.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.name}
            </option>
          );
        })}
      </select>
      {error && error.status && <GenericText size="xsm" className="text-red-600"> {error.message} </GenericText>}
    </div>
  );
};

export default Select;
