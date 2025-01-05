
class Admin {
    static async validateAdminUser(req: any, res: any, next: any) {
        console.log(req.body);
        console.log(req.headers);
        if (req.headers.rolename != "Admin") {
            return res.status(401).send({
                "message": "UnAuthorized",
                "statusCode": "401",
                "Success": "False"
            })
        }
        next();
    }
}

export default Admin;