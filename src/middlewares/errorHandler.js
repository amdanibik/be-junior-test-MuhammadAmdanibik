import winston from "../logger";

export default function errorHandler(err, req, res, next) {
  let status = err.status || 500;
  let message = err.message || "Internal Server Error";

  switch (err.name) {
    case "SequelizeValidationError":
      message = "";
      for (let i = 0; i < err.errors.length; i++) {
        message += err.errors[i].message;
        if (i !== err.errors.length - 1) {
          message += ", ";
        }
      }
      break;

    case "SequelizeUniqueConstraintError":
      message = err.errors[0].message;
      break;

    case "ValidationError":
      status = 400;
      break;
  }

  winston.error(
    `${status} - ${message} - ${req.originalUrl} - ${req.method} - ${req.ip}`
  );

  res.status(status).json({ message });
}
