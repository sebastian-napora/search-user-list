import MockAdapter from 'axios-mock-adapter/types';

import { USERS_ENDPOINT } from 'src/api/constants';

/**
 * @description This function return list of users.
 * @function getUsers
 * @category API GET USERS SERVICE MOCKED
 */
export const getUsers = (mock: MockAdapter, isThrowError: boolean): void => {
  const USER_LIST = [
    {
      address: {
        street: 'Union',
        suite: 'Suite',
        city: 'Manchester',
        zipcode: '20-145',
        geo: {
          lat: '2222',
          lng: '44'
        }
      },
      company: {
        name: 'Teauro Co',
        catchPhrase: 'Teauro',
        bs: 'bs'
      },
      email: 'tabue@com.en',
      id: 1,
      name: 'Stefan',
      phone: '555666000',
      username: 'Set',
      website: 'websiate.org'
    },
    {
      address: {
        street: 'Union 2',
        suite: 'Suite 2',
        city: 'Manchester 2',
        zipcode: '20-222',
        geo: {
          lat: '33',
          lng: '1'
        }
      },
      company: {
        name: 'Teauro Co 22',
        catchPhrase: 'Teauro 22',
        bs: 'bs 2'
      },
      email: 'tabue22@com.en',
      id: 2,
      name: 'Margaret',
      phone: '5123122230',
      username: 'Set 2',
      website: 'websiate2.org'
    }
  ];

  const GET_USERS = mock.onGet(USERS_ENDPOINT);
  isThrowError ? GET_USERS.networkError() : GET_USERS.reply(200, USER_LIST);
};
