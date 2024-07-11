const errHandlerMiddleware =  (err, req, res, next) => {
  res.status(500).json({
    status: 500,
    message: 'custom error message handler',
  })
}

module.exports = errHandlerMiddleware
