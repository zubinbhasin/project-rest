const request = require('supertest')
const httpStatus = require('http-status')
const app = require('../../src/app')
const setupTestDB = require('../utils/setupTestDB')

setupTestDB()

describe('GET /v1/records', () => {
  test('should correctly return records', async () => {
    const res = await request(app)
      .get('/v1/records')
      .query({
        startDate: '2016-01-26',
        endDate: '2018-02-02',
        minCount: 2950,
        maxCount: 3000
      }
      )
      .send()
      .expect(httpStatus.OK)

    expect(res.body).toEqual({
      records: expect.any(Array),
      message: 'Successful',
      code: 0
    })
  })

  test('should return 404 (code -1) when not found', async () => {
    const res = await request(app)
      .get('/v1/records')
      .query({
        startDate: '2020-01-26',
        endDate: '2018-02-02',
        minCount: 2950,
        maxCount: 3000
      }
      )
      .send()
      .expect(httpStatus.NOT_FOUND)

    expect(res.body).toEqual({
      message: 'Records Not Found',
      code: 1
    })
  })

  test('should return bad invalid request query', async () => {
    const res = await request(app)
      .get('/v1/records')
      .query({
        startDate: '2020',
        endDate: '2018-02-02',
        minCount: 2950,
        maxCount: 3000
      }
      )
      .send()
      .expect(httpStatus.BAD_REQUEST)

    expect(res.body).toEqual({
      message: '\"startDate\" must be in YYYY-MM-DD format',
      code: 2
    })
  })
})
