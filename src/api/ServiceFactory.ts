import { IServices } from "./types";

import users from "./users-services";

const services: IServices = Object.freeze({
  users,
});

export const ServiceFactory = Object.freeze({
  get: (name: "users") => services[name],
});
