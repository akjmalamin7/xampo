import { FocusEvent } from "react";
export type ErrorType = {
  status: boolean;
  message: string;
};

export type SelectProps = {
  size?: "sm" | "md" | "lg";
  name?: string;
  label?: string;
  disabled?: boolean;
  readOnly?: boolean;
  error?: ErrorType;
  value?: string;
  options: {
    value: string;
    name: string;
  }[];
  className?: string;
  onSelect?: (value: string) => void;
  onBlur?: (event: FocusEvent<HTMLSelectElement>) => void;
  onFocus?: (event: FocusEvent<HTMLSelectElement, Element>) => void;
};
