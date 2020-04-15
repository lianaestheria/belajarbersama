/* eslint no-unused-vars: off */
const env = require('dotenv').config();
const supertest = require('supertest');

const api = supertest(process.env.API_BASE_URL);

const getSellfazzToken = (() => {
  let token;

  function init(credential) {
    function requestToken() {
      return api.post('/login')
        .set('Content-Type', 'application/json')
        .send(credential);
    }

    return {
      requestToken: requestToken(credential),
    };
  }

  return {
    getToken: (credential) => {
      token = init(credential).requestToken;
      return token;
    },
  };
})();

module.exports = {
  getSellfazzToken
};
