const { config } = require("@netlify/remix-edge-adapter");
const { getDependenciesToBundle } = require("@remix-run/dev");
const baseConfig =
  process.env.NODE_ENV === "production"
    ? config
    : { ignoredRouteFiles: ["**/.*"], future: config.future };

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  ...baseConfig,
  // This works out of the box with the Netlify adapter, but you can
  // add your own custom config here if you want to.
  //
  // See https://remix.run/docs/en/v1/file-conventions/remix-config
  future: {
    v2_errorBoundary: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
  tailwind: true,
};
