import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

interface IValue {
  type: string;
  label: string;
  input: string;
  error: string;
}

interface Props {
  value: IValue;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface ITextInput {
  error: string;
}

const LabelInput = ({ value, onChange, onBlur }: Props) => {
  return (
    <Container>
      <Label>{value.label}</Label>
      <TextInput value={value.input} onChange={onChange} onBlur={onBlur} error={value.error} />
      <ErrorText>{value.error}</ErrorText>
    </Container>
  );
};

export default LabelInput;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: 700;
  font-size: 13px;
  color: '#6C6C7D';
`;

const TextInput = styled.input<ITextInput>`
  margin-top: 8px;
  padding: 16px;
  background-color: ${({ error }) => (error ? '#FDEDEE' : '#F7F7FA')};
  border-radius: 12px;
  border: 1px solid #000;
`;

const ErrorText = styled.div`
  margin-top: 8px;
  font-weight: 400;
  font-size: 13px;
  color: #ed4e5c;
`;
