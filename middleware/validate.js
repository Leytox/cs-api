const validate = (schema) => (req, res, next) => {
  if (!schema) return next();

  const validationErrors = [];

  ["params", "query", "body"].forEach((key) => {
    if (schema[key]) {
      const { error } = schema[key].validate(req[key], { abortEarly: false });
      if (error) {
        validationErrors.push(
          ...error.details.map((detail) => ({
            field: detail.path.join("."),
            message: detail.message,
          })),
        );
      }
    }
  });

  if (validationErrors.length > 0) {
    return res.status(400).json({
      error: "Validation Error",
      details: validationErrors,
    });
  }

  next();
};

export default validate;
