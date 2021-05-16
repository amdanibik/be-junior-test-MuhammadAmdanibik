const baseResponse = ({ success, message, data}) =>
  (res, status = 1) => {
    const payload = {
      success,
      message,
      data,
    };
    if (status) {
      return res.json(payload);
    } else {
      return res.status(status).json(payload);
    }
  };

module.exports = baseResponse;
