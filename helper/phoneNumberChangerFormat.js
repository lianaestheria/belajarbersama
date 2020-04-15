const PNF = require('google-libphonenumber').PhoneNumberFormat;
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

function getPhoneNumberNationalFormat(stringNumber){
    const number = phoneUtil.parseAndKeepRawInput(stringNumber, 'ID');
    phoneNumber = phoneUtil.format(number, PNF.NATIONAL);
    phoneNumberResult = phoneNumber.replace(/-/g, "");
    return phoneNumberResult;
}

function getPhoneNumberNational(stringNumber){
    const number = phoneUtil.parseAndKeepRawInput(stringNumber, 'ID');
    phoneNumberResult = String(number.getNationalNumber());
    return phoneNumberResult;
}

function getPhoneNumberWithPlusSign(stringNumber){
    const number = phoneUtil.parseAndKeepRawInput(stringNumber, 'ID');
    phoneNumberResult = phoneUtil.format(number, PNF.E164);
    return phoneNumberResult;
}

function getPhoneNumberNoPlusSign(stringNumber){
    const number = phoneUtil.parseAndKeepRawInput(stringNumber, 'ID');
    phoneNumber = phoneUtil.format(number, PNF.E164);
    phoneNumberResult = phoneNumber.substring(1);
    return phoneNumberResult;
}

module.exports = {
    getPhoneNumberNationalFormat,
    getPhoneNumberNational,
    getPhoneNumberWithPlusSign,
    getPhoneNumberNoPlusSign
};