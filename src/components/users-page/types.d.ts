import { ChangeEvent } from "react";

type S = string;
type NU = null;
type U = undefined;

export type TUseUsersPage = {
  findUserPhrease: S | NU;
  onChange: ((event: ChangeEvent<HTMLInputElement>) => void) | U;
};
