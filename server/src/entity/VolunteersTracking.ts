import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Volunteer } from "./Volunteer";
import { Projects } from "./Projects";

@Entity()
export class VolunteersTracking {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn("int") projectsId: number;

  @PrimaryColumn("int") volunteerId: number[];

  @Column({ type: "boolean" })
  showedUp: boolean;

  @Column()
  eventDate: string;

  @ManyToOne(() => Volunteer)
  @JoinColumn()
  volunteer: Volunteer[];

  @ManyToOne(() => Projects)
  @JoinColumn()
  projects: Projects;
}
