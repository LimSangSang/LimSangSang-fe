import { axiosGet, axiosPost } from './axios';

export const login = async (id: string, password: string) => {
  const { data } = await axiosPost('/login', { id, password });
  console.log(data);
  return data;
  //   const result = data.map((coupon: ICouponItem) => {
  //     return { ...coupon, checked: false };
  //   });
  //   return result;
};
