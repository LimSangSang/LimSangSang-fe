import Link from 'next/link';
import type { NextPage } from 'next';
import React, { useState } from 'react';
import styled from 'styled-components';
import LabelInput from '../components/LabelInput';
import { useLogin } from '../hooks/use-login';
import LoginButton from '../components/LoginButton';
import { login } from '../api/login';
import { useRouter } from 'next/router';

const LoginPage: NextPage = () => {
  const router = useRouter();
  const [id, onChangeId] = useLogin({
    type: 'id',
    label: '아이디',
    input: 'asdf',
    error: '',
  });
  const [password, onChangePassword] = useLogin({
    type: 'password',
    label: '비밀번호',
    input: 'fds',
    error: '',
  });

  const onClickLogin = async () => {
    console.log('click');
    const { data } = await login(id.input, password.input);
    console.log(data);
    if (!data.accessToken) return;
    router.push('/');
  };

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
        <LoginButton onClick={onClickLogin} disabled={false} />
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
