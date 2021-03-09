import { AxiosResponse } from "axios";

export interface IServices {
  users: {
    getUsers(): Promise<AxiosResponse<any> | undefined>;
  };
}
