
import { Request, Response, NextFunction } from 'express';

const homeController = (req: Request , res: Response)=>{
    try{
        return res.status(200).json({
            msg: "Yeah"
        });
    }catch(err){
        console.log("Error in home controller", err);
    }
}

module.exports = {
    homeController
}