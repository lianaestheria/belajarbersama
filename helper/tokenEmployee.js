/* eslint no-unused-vars: off */
const env = require('dotenv').config();
const supertest = require('supertest');

const api = supertest(process.env.API_BASE_URL);

const getSellfazzToken = (() => {
    let token;

    function init(employeeId, credential) {
        function requestToken() {
            return api.post(`/employees/${employeeId}/login`)
                .set('Content-Type', 'application/json')
                .send(credential);
        }

        return {
            requestToken: requestToken(employeeId, credential),
        };
    }

    return {
        getToken: (employeeId, credential) => {
            token = init(employeeId, credential).requestToken;
            return token;
        },
    };
})();

module.exports = {
    getSellfazzToken
};
