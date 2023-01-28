export interface ILazyTextInputProps {
  onInputCallBack: (inputValue: string) => void;
  classNames?: string;
  placeholder?: string;
  defaultValue?: string;
  minValue?: string;
  maxValue?: string;
}
