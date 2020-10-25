const { env } = process;
require('dotenv').config({
  path: `${__dirname}/../../.env`,
});

const config = {
  dbConfig: {
    env: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: 'mysql',
    },
    credentials: {
      username: process.env.DB_USER_NAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    }
  },
}

console.log('***************** APP CONFIG *************');
console.log(config);
console.log('***************** APP CONFIG *************');

module.exports = config;
