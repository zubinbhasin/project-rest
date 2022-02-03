const mongoose = require('mongoose')
const recordSchema = mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
      trim: true
    },
    createdAt: {
      type: Date,
      required: true
    },
    totalCount: {
      type: Number,
      required: true
    }
  }
)

// add plugin that converts mongoose to json
// recordSchema.plugin(toJSON)
// recordSchema.plugin(paginate)

/**
 * @typedef Record
 */
const Record = mongoose.model('Record', recordSchema)

module.exports = Record
