const validation = (schema) => (req, res, next) => {
    schema.validate(req.body).then(() => {
        next()
    }).catch((error) => {
        next(error)
    })
}

module.exports = validation