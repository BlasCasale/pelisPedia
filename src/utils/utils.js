const regExp = /^[A-Z][a-z]$/;
const regExp_password = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
const regExp_mail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

module.exports = {
    regExp,
    regExp_password,
    regExp_mail
}