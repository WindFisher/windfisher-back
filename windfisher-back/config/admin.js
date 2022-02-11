module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bf33dcb5cecee80b04546b6223f8fce7'),
  },
});
