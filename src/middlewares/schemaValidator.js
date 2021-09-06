export default function validator(schema) {
  return async (req, res, next) => {
    try {
      const data = await schema.validateAsync(req.body);

      req.body = data;

      next();
    } catch (error) {
      next(error);
    }
  };
}
