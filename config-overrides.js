const paths = require("react-scripts/config/paths");
const path = require("path");

const { alias } = require("react-app-rewire-alias");

const pathnameResolve = (aliasesPath) =>
  path.resolve(__dirname, `${paths.appSrc}${aliasesPath}`);

const defineAliases = (config) =>
  alias({
    "@api": pathnameResolve("/api/"),
  })(config);

module.exports = {
  webpack: (config, env) => {
    if (env === "development") {
      defineAliases(config);
      return config;
    }

    return [config, defineAliases(config)];
  },
};
