import { ChangeEvent, useState } from "react";

import { TUseUsersPage } from "./types";

export const useUsersPage = (): TUseUsersPage => {
  const [findUserPhrease, setFindUserPhrease] = useState<string | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => setFindUserPhrease(e.target.value);

  return { findUserPhrease, onChange };
};
