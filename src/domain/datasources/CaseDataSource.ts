
import { ICase } from '../entities/cases.entity';
import { CasesModel } from '../../data/models/cases.model';

export class CaseDataSource {
  
  updateCase = async (id: string, casePartial: Partial<ICase>) => {
    await CasesModel.findByIdAndUpdate(id, {
      age: casePartial.age,
      genre: casePartial.genre,
      lng: casePartial.lng,
      lat: casePartial.lat,
      isEmailSent: casePartial.isEmailSent
    });
  }
  
}