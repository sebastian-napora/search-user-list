import { useCallback, useEffect, useState } from "react";

import flow from "lodash.flow";

import { ServiceFactory } from "@api/ServiceFactory";

import { TUsersDataList, TUseUsersList } from "./types";

import { lowerCaseCompareLetters, regexWhiteSpaces } from "./utils";

import * as C from "./constants";

const allUsers = ServiceFactory.get(C.USERS);

export const useUsersList = ({ findUserPhrease }: TUseUsersList<"props">): TUseUsersList<"return"> => {
  const [data, setUsersList] = useState<TUsersDataList[] | []>([]);
  const [message, setMessage] = useState<string | null>(null);
  const [users, setUsers] = useState<TUsersDataList[] | []>([]);

  const takeAllUsers = useCallback(async () => {
    try {
      const takeData = await allUsers.getUsers();
      setUsersList(takeData?.data);
      setUsers(takeData?.data);
    } catch (err) {
      setMessage(err);
    }
  }, [data.length === 0]);

  const filterData = () => {
    if (findUserPhrease !== null) {
      const searchingLetters = flow([regexWhiteSpaces, lowerCaseCompareLetters])(findUserPhrease);
      const filteredUsers = data.filter(({ name }) =>
        flow([regexWhiteSpaces, lowerCaseCompareLetters])(name).includes(searchingLetters)
      );

      if (!findUserPhrease) return setUsers(data);

      return setUsers(filteredUsers);
    }
  };

  useEffect(() => {
    (async () => await takeAllUsers())();
  }, []);

  useEffect(() => {
    findUserPhrease !== null && filterData();
  }, [findUserPhrease]);

  return { message, data, users };
};
