import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Projects {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  days: string;

  @Column()
  time: string;

  @Column()
  location: string;
}
