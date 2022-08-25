import React, { ChangeEvent } from "react";

export interface InputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: "number" | "text";
  placeholder: string;
}

export const Input: React.FC<InputProps> = ({
  onChange,
  value,
  type,
  placeholder,
}) => {
  return (
    <div>
      <input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};
