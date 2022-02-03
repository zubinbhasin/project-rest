const express = require('express')
const recordsRoute = require('./records.route')
const config = require('../../config/config')

const router = express.Router()

const defaultRoutes = [
  {
    path: '/records',
    route: recordsRoute
  }
]

const devRoutes = [

]

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route)
})

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route)
  })
}

module.exports = router
