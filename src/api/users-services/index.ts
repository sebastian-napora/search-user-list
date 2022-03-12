import { AxiosResponse } from 'axios';

import Http from '../HTTP';

import { TUsersDataList } from 'core/typings/Users';

import { ERROR_MESSAGE, USERS_ENDPOINT } from './constants';

export default {
  /**
   * @method getUsers
   * @description This method handle fetch user list from API. Return list or message about error.
   */
  async getUsers(): Promise<AxiosResponse<TUsersDataList[]> | typeof ERROR_MESSAGE> {
    try {
      return await Http.get(USERS_ENDPOINT);
    } catch (err) {
      console.error(err);

      return ERROR_MESSAGE;
    }
  }
};
