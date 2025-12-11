// src/molecules/InputLabel.tsx
import React from "react";
import Input from "../atoms/Input";
import Label from "../atoms/Label";
import type { FieldErrors, UseFormRegisterReturn } from "react-hook-form";

type InputLabelProps = {
  label: string;
  placeholder?: string;
  error?: string;
  register?: UseFormRegisterReturn;
  type?: string;
};

const InputLabel: React.FC<InputLabelProps> = ({ label, placeholder, error, register, type = "text" }) => {
  return (
    <div className="flex flex-col gap-1">
      <Label>{label}</Label>
      <Input placeholder={placeholder} type={type} {...register} error={error} />
    </div>
  );
};

export default InputLabel;
