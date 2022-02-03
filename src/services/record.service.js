const httpStatus = require('http-status')
const { Record } = require('../models')
const ApiError = require('../utils/ApiError')

/**
 * Query for records
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryRecords = async (startDate, endDate, minCount, maxCount) => {
  // using find query instead of aggregate since it is faster
  const records = await Record.find({
    createdAt: { $gte: new Date(startDate).toISOString(), $lte: new Date(endDate).toISOString() },
    $expr: {
      $and: [
        { $gte: [{ $sum: ['$counts'] }, minCount] },
        { $lte: [{ $sum: ['$counts'] }, maxCount] }
      ]
    }
  }, {
    _id: 0,
    totalCount: { $sum: '$counts' },
    key: 1,
    createdAt: 1
  }).sort({ createdAt: 1 })
  if (records.length === 0) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Records Not Found')
  }
  return records
}

module.exports = {
  queryRecords
}
