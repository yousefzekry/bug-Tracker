//hl el async file fel middleware 3ml excute lel file da b3d el next 3shan awel argument hena esmaha err???
const errorHandlerMiddleWare = (err, req, res, next) => {
    return res.status(500).json({msg:err})
}

module.exports = errorHandlerMiddleWare