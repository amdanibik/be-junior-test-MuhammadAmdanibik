const uuid = require('node-uuid')

const assignReqId = (req, res, next) => {
    req.id = uuid.v4()
    next()
}

module.exports = assignReqId