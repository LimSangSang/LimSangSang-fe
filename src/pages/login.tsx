import Link from 'next/link';
import type { NextPage } from 'next';
import React, { useState } from 'react';
import styled from 'styled-components';
import LabelInput from '../components/LabelInput';
import { useLogin } from '../hooks/use-login';

const LoginPage: NextPage = () => {
  const [id, onChangeId] = useLogin({
    type: 'id',
    label: '아이디',
    input: '',
    error: '',
  });
  const [password, onChangePassword] = useLogin({
    type: 'password',
    label: '비밀번호',
    input: '',
    error: '',
  });

  return (
    <>
      <Header>
        <Link href='/'>
          <Title>HAUS</Title>
        </Link>
        <Link href='/login'>
          <p>login</p>
        </Link>
      </Header>
      <Form>
        <LabelInput value={id} onChange={onChangeId} />
        <Space />
        <LabelInput value={password} onChange={onChangePassword} />
        <LoginButton disabled>로그인</LoginButton>
      </Form>
    </>
  );
};

export default LoginPage;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Title = styled.a`
  font-size: 48px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding: 0 20px 40px;
`;

const Space = styled.div`
  margin-top: 16px;
`;

const LoginButton = styled.button`
  margin-top: 40px;
  padding: 20px;
  border-radius: 12px;
  background-color: #222;
  color: #fff;

  &:disabled {
    background-color: #e2e2ea;
  }
`;
