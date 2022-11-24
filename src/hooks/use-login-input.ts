import { ChangeEvent, useState } from 'react';

interface IValue {
  type: string;
  label: string;
  input: string;
  error: string;
}
type UserInputProps = [
  IValue,
  (e: ChangeEvent<HTMLInputElement>) => void,
  (e: ChangeEvent<HTMLInputElement>) => void,
  boolean
];

const idError = '올바른 아이디 형식으로 입력해주세요.';
const passwordError = '올바른 비밀번호 형식으로 입력해주세요.';
const passwordReg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[~?!@#$%^&*_-]).{8,30}$/;

export const useLoginInput = (initial: IValue): UserInputProps => {
  const [value, setValue] = useState(initial);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, input: e.target.value });
  };

  const onBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (value.type === 'id') {
      if (inputValue.length < 5 || inputValue.length > 30)
        return setValue({ ...value, error: idError });
      return setValue({ ...value, error: '' });
    }
    const checkedPassword = passwordReg.test(inputValue);
    if (!checkedPassword) return setValue({ ...value, error: passwordError });
    return setValue({ ...value, error: '' });
  };

  return [value, onChange, onBlur, Boolean(value.error)];
};
