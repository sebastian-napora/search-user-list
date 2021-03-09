import Http from "../HTTP";

import * as C from "./constants";

export default {
  async getUsers() {
    try {
      return await Http.get(C.USERS_ENDPOINT);
    } catch (err) {
      return err && C.ERROR_MESSAGE;
    }
  },
};
