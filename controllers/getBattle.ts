import { Request,Response } from "express";
import battleServices from "../services/battleSv.js";

function getBattleCr(req:Request,res:Response) {
    const battleData = res.locals.battleData;
    const result = battleServices.startsCount(battleData);
    res.send(result).status(200);
}

export default getBattleCr;