
const notFound = (req, res) => {
  res.status(404).send('Route not found custom message').json({
    status: 404,
    message: 'Page not found'
  })
}

module.exports = notFound