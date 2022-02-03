const catchAsync = require('../utils/catchAsync')
const pick = require('../utils/pick')
const { recordService } = require('../services')

const getRecords = catchAsync(async (req, res) => {
  const { startDate, endDate, minCount, maxCount } = pick(req.query, ['startDate', 'endDate', 'minCount', 'maxCount'])
  const records = await recordService.queryRecords(startDate, endDate, minCount, maxCount)
  const responseObj = {
    code: 0,
    message: 'Successful',
    records
  }
  res.send(responseObj)
})

module.exports = {
  getRecords
}
