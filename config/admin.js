module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f6c4eb64c6c21205bb9f021901d40a44'),
  },
});
