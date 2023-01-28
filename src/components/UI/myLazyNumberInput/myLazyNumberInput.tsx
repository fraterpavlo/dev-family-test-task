import React, { useRef, useState } from "react";
import { ILazyTextInputProps } from "./myLazyNumberInput.model.";
import styles from "./myLazyNumberInput.module.css";

const MyLazyNumberInput = (props: ILazyTextInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string>("");

  function onEnterPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      if (inputRef.current?.value === value) return;

      setValue(inputRef.current?.value ?? "");
      props.onInputCallBack(inputRef.current?.value!);
    }
  }

  function onBlur() {
    if (inputRef.current?.value === value) return;

    setValue(inputRef.current?.value ?? "");
    props.onInputCallBack(inputRef.current?.value!);
  }

  return (
    <input
      type="number"
      min={props.minValue ?? ""}
      max={props.maxValue ?? ""}
      ref={inputRef}
      className={`${props.classNames ?? ""} ${styles.myLazyNumberInput}`}
      placeholder={props.placeholder}
      defaultValue={props.defaultValue ?? ""}
      onBlur={onBlur}
      onKeyDown={onEnterPress}
    />
  );
};

export default MyLazyNumberInput;
