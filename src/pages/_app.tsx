import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import styled from 'styled-components';

import setupMSW from '../api/setup';
import AsyncBoundary from '../components/api/AsyncBoundary';
import GlobalStyle from '../styles/GlobalStyle';

setupMSW();

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: { queries: { suspense: true, useErrorBoundary: true } },
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <AsyncBoundary>
        <Background />
        <Content>
          <Component {...pageProps} />
        </Content>
      </AsyncBoundary>
    </QueryClientProvider>
  );
}

export default MyApp;

const Background = styled.div`
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: #f0f0f5;
`;

const Content = styled.div`
  width: 420px;
  min-height: 100%;
  margin: 0 auto;
  background-color: #fff;
`;
