function random(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

function RandomName() {
    resultName = random(5, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    return resultName;
}

function RandomId() {
    resultId = random(20, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    return resultId;
}

function RandomNumber() {
    resultNumber = random(3, '0123456789');
    return resultNumber;
}


module.exports = {
    RandomName,
    RandomId,
    RandomNumber
};
