module.exports = ({ env }) => ({
  url: env("https://windfisher.herokuapp.com/"),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", []),
  },
});
