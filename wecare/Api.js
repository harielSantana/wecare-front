export const API_URL = 'https://wecareapi.azurewebsites.net/api';

export function USER_GET() {
  return {
    url: API_URL + '/signup',
    options: {
      method: 'POST',
    },
  };
}
