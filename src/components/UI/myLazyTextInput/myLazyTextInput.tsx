import React, { useRef } from "react";
import { ILazyTextInputProps } from "./myLazyTextInputmodel.";

const MyLazyTextInput = (props: ILazyTextInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  function onEnterPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      props.onInputCallBack(inputRef.current!);
    }
  }

  function onBlur() {
    props.onInputCallBack(inputRef.current!);
  }

  return (
    <input
      type="text"
      ref={inputRef}
      className={props.classNames ?? ""}
      placeholder={props.placeholder}
      defaultValue={props.defaultValue ?? ""}
      onBlur={onBlur}
      onKeyDown={onEnterPress}
    />
  );
};

export default MyLazyTextInput;
