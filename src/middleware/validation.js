const validation = (schema) => (req, res, next) => {
    schema.validate(req.body).then(() => {
        next()
    }).catch((error) => {
        console.log(error)
    })
}

module.exports = validation