const Joi = require('joi').extend(require('@joi/date'))
const getRecords = {
  query: Joi.object().keys({
    startDate: Joi.date().format('YYYY-MM-DD'),
    endDate: Joi.date().format('YYYY-MM-DD'),
    minCount: Joi.number().required(),
    maxCount: Joi.number().required()
  })
}

module.exports = {
  getRecords
}
