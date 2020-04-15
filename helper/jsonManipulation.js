const { expect } = require('chai');

function patchData(responseBody, requestBody) {
  ret = requestBody;
  mainLoop:
  for (let i in requestBody) {
    if (typeof requestBody[i] == 'object') {
      for (let j in requestBody[i]) {
        if (responseBody.hasOwnProperty(j)) {
          ret[i][j] = responseBody[j];
        }
        else {
          for (let k in responseBody) {
            if (typeof responseBody[k] == 'object') {
              for (let l in responseBody[k]) {
                if (responseBody[k].hasOwnProperty(j)) {
                  ret[i][j] = responseBody[k][j];
                  continue mainLoop;
                }
              }
            }
          }
        }
      }
    }
    else {
      for (let j in responseBody) {
        if (typeof responseBody[j] == 'object') {
          for (let k in responseBody[j]) {
            if (k == i) {
              ret[i] = responseBody[j][k];
              continue mainLoop;
            }
          }
        }
        else
          if (responseBody.hasOwnProperty(i)) {
            ret[i] = responseBody[i];
            continue mainLoop;
          }
      }
    }
  }
  return ret;

}

function compareData(responseBody, requestBody) {
  mainLoop:
  for (let i in requestBody) {
    if (typeof requestBody[i] == 'object') {
      for (let j in requestBody[i]) {
        if (responseBody.hasOwnProperty(j)) {
          expect(requestBody[i][j]).to.eql(responseBody[j]);
        }
        else {
          for (let k in responseBody) {
            if (typeof responseBody[k] == 'object') {
              for (let l in responseBody[k]) {
                if (responseBody[k].hasOwnProperty(j)) {
                  expect(requestBody[i][j]).to.eql(responseBody[k][j]);
                  continue mainLoop;
                }
              }
            }
          }
        }
      }
    }
    else {
      for (let j in responseBody) {
        if (typeof responseBody[j] == 'object') {
          for (let k in responseBody[j]) {
            if (k == i) {
              expect(requestBody[i]).to.eql(responseBody[j][k]);
              continue mainLoop;
            }
          }
        }
        else
          if (responseBody.hasOwnProperty(i)) {
            expect(requestBody[i]).to.eql(responseBody[i]);
            continue mainLoop;
          }
      }
    }
  }

}

module.exports = {
  patchData,
  compareData
};
