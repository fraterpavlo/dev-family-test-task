import React, { useRef } from "react";
import { ILazyTextInputProps } from "./myLazyTextInputmodel.";

const MyLazyTextInput = (props: ILazyTextInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  function onEnterPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      props.onInputCallBack(inputRef.current!.value);
    }
  }

  function onBlur() {
    props.onInputCallBack(inputRef.current!.value);
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
