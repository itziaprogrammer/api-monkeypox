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

  saveCase = async (req: Request, res: Response) => {
    console.log('body', req.body);
    const { genre, age, lat, lng } = req.body;
    const newCase = await CasesModel.create({
      age: age,
      genre: genre,
      lat: lat,
      lng: lng,
    });
  
    return res.status(201).send(newCase);
  }

  getCaseById = async (req: Request, res: Response) => {
    const id = req.params.id;

    const foundCase = await CasesModel.findById(id);
    if (!foundCase) return res.status(404).send(`No case found.`);

    return res.send(foundCase);
  } 

  updateCaseById = async (req: Request, res: Response) => {
    const id = req.params.id;
    const { genre, age, lat, lng } = req.body;
    let currentCase = await CasesModel.findById(id);
    if (!currentCase) return res.status(404).send(`No case found.`);
  
      currentCase = await CasesModel.findByIdAndUpdate(id, {
      genre: genre,
      age: age,
      lat: lat,
      lng: lng
    }, { new: true });
  
    res.send(currentCase);
  }

}