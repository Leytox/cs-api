import Joi from "joi";

const classValidation = {
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
  getByFaction: {
    params: Joi.object({
      faction: Joi.string().valid("Terrorist", "Counter-Terrorist").required(),
    }),
  },
  getAll: {
    query: Joi.object({
      limit: Joi.number().integer().min(1).max(100).default(10),
      offset: Joi.number().integer().min(0).default(0),
    }),
  },
};

export default classValidation;
