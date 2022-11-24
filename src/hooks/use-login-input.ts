import { ChangeEvent, useState } from 'react';

interface IValue {
  type: string;
  label: string;
  input: string;
  error: string;
}
type UserInputProps = [IValue, (e: ChangeEvent<HTMLInputElement>) => void];
export const useLoginInput = (initial: IValue): UserInputProps => {
  const [value, setValue] = useState(initial);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, input: e.target.value });
  };

  return [value, onChange];
};
