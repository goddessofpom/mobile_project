import request from '../utils/request';

export function query() {
  return request('/api/users');
}

export async function userLogin(params) {
  console.log(params)
  return request({
    method: "POST",
    url: "/member/users/login",
    data: params
  });
}
