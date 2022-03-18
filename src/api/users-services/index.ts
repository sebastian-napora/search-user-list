import { AxiosResponse } from 'axios';

import { HTTP } from '../HTTP';

import { TUsersDataList } from 'src/core/typings/Users';

import { ERROR_MESSAGE, USERS_ENDPOINT } from '../constants';

export default {
  /**
   * @method getUsers
   * @description This method handle fetch user list from API. Return list or message about error.
   */
  async getUsers(isThrowError: boolean): Promise<AxiosResponse<TUsersDataList[]> | typeof ERROR_MESSAGE> {
    try {
      return await HTTP(isThrowError).get(USERS_ENDPOINT);
    } catch (err) {
      console.error(err);

      return ERROR_MESSAGE;
    }
  }
};
