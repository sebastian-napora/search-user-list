import { ChangeEvent } from 'react';

export type TUseUsersPage = () => {
  findUserPhrease: string | null;
  onChange: ((event: ChangeEvent<HTMLInputElement>) => void) | undefined;
};
