import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { VolunteersTracking } from "../entity/VolunteersTracking";

export class VolunteersTrackingController {
  private volunteersTrackingRepository = getRepository(VolunteersTracking);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.volunteersTrackingRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.volunteersTrackingRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    console.log(request.body);
    const projectId = request.body.projectId;
    const volunteersArray = request.body.volunteer;
    const volunteerId = request.body.volunteer.id;
    volunteersArray.forEach((volunteer) => {
      return this.volunteersTrackingRepository.save({ projectId, volunteerId });
    });
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let userToRemove = await this.volunteersTrackingRepository.findOne(
      request.params.id
    );
    await this.volunteersTrackingRepository.remove(userToRemove);
  }
}
