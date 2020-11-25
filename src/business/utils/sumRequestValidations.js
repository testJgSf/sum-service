const { body, validationResult } = require('express-validator');

let sumRequestValidations = () => {
  return [
      body('factors').isArray({min: 2}).withMessage('Factors should be an array with at least 2 positions'),
      body('factors.*').isNumeric().withMessage('Factors must contain only numeric values')
  ]
};

let checkValidations = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    log.error('validations /','Bad request');
    return res.status(httpBadRequest).json({message: 'Check errors for details',errors: errors.array()});
};

module.exports = { sumRequestValidations, checkValidations};