import Joi from "joi";

const weaponValidation = {
  getById: {
    params: Joi.object({
      id: Joi.string().hex().length(24).required(),
    }),
  },
  getByName: {
    params: Joi.object({
      name: Joi.string().required(),
    }),
  },
  getByType: {
    params: Joi.object({
      type: Joi.string().required(),
    }),
  },
  getByCountry: {
    params: Joi.object({
      country: Joi.string().required(),
    }),
  },
  getAll: {
    query: Joi.object({
      limit: Joi.number().integer().min(1).max(100).default(10),
      offset: Joi.number().integer().min(0).default(0),
    }),
  },
};

export default weaponValidation;
