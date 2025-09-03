const makeResponseGetOK = (data) => {
  return { status: "ok", code: 200, data };
};
const makeResponsePostOK = (msg) => {
  return { status: "ok", code: 200, msg };
};
const makeResponseError = (msg) => {
  return { status: "error", code: 400, error: { msg } };
};

module.exports = { makeResponseError, makeResponseGetOK, makeResponsePostOK };
