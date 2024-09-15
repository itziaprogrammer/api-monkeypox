import { Router } from "express";
import { CasesController } from "./cases.controller";

export class CasesRoutes {
  static get routes(): Router {
    const router = Router();
    const casesController = new CasesController();

    router.get('', casesController.getCases);
    router.get('/last-week', casesController.getCasesLastWeek);
    router.get('/:id', casesController.getCaseById);
    router.post('', casesController.saveCase); 
    router.put('/:id', casesController.updateCaseById);
    router.delete('/:id', casesController.deleteCaseById);

    return router;
  }
}
