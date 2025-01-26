import { ChangeEvent, FocusEvent, KeyboardEvent } from "react";

export type ErrorType = {
  status: boolean;
  message: string;
};

export interface InputProps{
  label?:string;
  name?:string;
  value?:string | string;
  type?:"text" |"email"|"password"|"number"
  placeholder?:string;
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onInput?: (event: React.FormEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onClear?: () => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
}