import jwt from "../../common/utils/jwt.js"
export default function authToken (req, res, next){
    try {
        let user = jwt.verify(req.headers.token)
        req.user = user
        next()
    } catch (error) {
        return res.json({
            status: 401,
            message: error.message
        })
    }
}