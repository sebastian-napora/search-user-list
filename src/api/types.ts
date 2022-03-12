import { AxiosResponse } from 'axios';
import { TUsersDataList } from 'src/core/typings/Users';

import users from './users-services';

//Services name
export type TServicesNames = 'users';

//Remaped keys from type and selecte returned service name with returned functions types
export type TRemapedServiceNames = { [Key in TServicesNames]: TService[Key] };

//Service name with returned functions types
export type TService = {
  users: typeof users;
};

export interface IServices {
  users: {
    getUsers(): Promise<AxiosResponse<TUsersDataList[]> | undefined>;
  };
}
