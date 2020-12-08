import { Entity, PrimaryColumn, ManyToMany, JoinTable } from "typeorm";
import { Volunteer } from "./Volunteer";
import { Projects } from "./Projects";

@Entity()
export class VolunteersProjects {
  @PrimaryColumn()
  volunteerId: number;

  @PrimaryColumn()
  projectsId: number;

  @ManyToMany(() => Volunteer)
  @JoinTable({
    name: "volunteesTracking",
  })
  volunteers: Volunteer[];
}
