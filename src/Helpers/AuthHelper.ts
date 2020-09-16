import { TOKEN_KEY } from 'Constants/StorageConst';

export const isAuthenticated = (): boolean => {
  const token: string = localStorage.getItem(TOKEN_KEY) as string;
  return token && token !== '' ? true : false;
};
