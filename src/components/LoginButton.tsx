import React from 'react';
import styled from 'styled-components';

interface Props {
  onClick: () => void;
  disabled: boolean;
}

const LoginButton = ({ onClick, disabled }: Props) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
      로그인
    </Button>
  );
};

export default LoginButton;

const Button = styled.button`
  margin-top: 40px;
  padding: 20px;
  border-radius: 12px;
  background-color: #222;
  color: white;

  &:disabled {
    background-color: #e2e2ea;
    color: black;
  }
`;
