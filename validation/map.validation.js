import Joi from "joi";

const mapValidation = {
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
  getByScenario: {
    params: Joi.object({
      scenario: Joi.string()
        .valid("Bomb/Defuse", "Hostage Rescue", "Assassination")
        .required(),
    }),
  },
  getByDeveloper: {
    params: Joi.object({
      developer: Joi.string().required(),
    }),
  },
  getAll: {
    query: Joi.object({
      limit: Joi.number().integer().min(1).max(100).default(10),
      offset: Joi.number().integer().min(0).default(0),
    }),
  },
};

export default mapValidation;
