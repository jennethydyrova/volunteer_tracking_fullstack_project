import { Entity, PrimaryGeneratedColumn, Column, Timestamp } from "typeorm";

@Entity()
export class Volunteer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  languagesSpoken: string;

  @Column()
  occupation: string;

  @Column()
  skills: string;

  @Column()
  role: string;
}
