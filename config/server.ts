module.exports = ({ env }) => ({
  url: 'https://avukatlik-sitesi.vercel.app',
  proxy: true,
  host: '0.0.0.0',
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});