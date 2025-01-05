import { Request, Response, NextFunction } from "express";
let checkAdmin = function (req: Request, res: Response, next: NextFunction) {
    if (req.headers.roleName !== "Admin") {
        return res.status(401).send({
            "message": "UnAuthorized",
            "statusCode": "401",
            "Success": "False"
        })
    }
    next();
}

export default checkAdmin;