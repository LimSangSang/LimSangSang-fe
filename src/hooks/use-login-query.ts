import { useMutation, useQuery } from '@tanstack/react-query';
import { login } from '../api/login';

export const useLoginQuery = (id: string, password: string) => {
  return useMutation(['user'], () => login(id, password));
};
