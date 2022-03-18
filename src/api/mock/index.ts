import { AxiosInstance } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getUsers } from './users-services';

export const mockMetadata = (HTTP: AxiosInstance, isThrowError: boolean): void | false => {
  const MOCK = new MockAdapter(HTTP, { delayResponse: 200 });

  //create new services object
  const SERVICES_MOCKED_DATA: false | { [key: string]: unknown } = !!MOCK && {
    users: getUsers(MOCK, isThrowError)
  };

  //invoke this services
  !!MOCK && !!SERVICES_MOCKED_DATA && ['users'].forEach((name: string) => SERVICES_MOCKED_DATA[name]);
};
