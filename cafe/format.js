const makeReponseGetOK = (data) => ({ status: "ok", code: 200, data });
const makeReponsePostOK = (msg) => ({ status: "ok", code: 201, msg });
const makeReponsePutOk = (msg) => ({ status: "ok", code: 203, msg });
const makeReponseDeleteOk = (msg) => ({ status: "ok", code: 204, msg });
const makeReponseError = (error) => ({ status: "error", code: 400, error });

module.exports = { makeReponsePostOK, makeReponseError, makeReponseGetOK, makeReponseDeleteOk };
