import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Projects } from "../entity/Projects";

export class ProjectsController {
  private projectsRepository = getRepository(Projects);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.projectsRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.projectsRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    console.log(request.body);
    return this.projectsRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let projectsToRemove = await this.projectsRepository.findOne(
      request.params.id
    );
    await this.projectsRepository.remove(projectsToRemove);
  }
}
