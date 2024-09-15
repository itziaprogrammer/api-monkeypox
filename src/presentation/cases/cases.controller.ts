import { Request, Response } from "express";
import { CasesModel } from "../../data/models/cases.model";

export class CasesController {

  getCases = async (req: Request, res: Response) => {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7); 
  
    const cases = await CasesModel.find({
      creationDate: { $gte: sevenDaysAgo }, 
    });
    
    res.send(cases);
  }

}