import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

  @Column({ type: 'varchar', length: 55 })
  name: string;

  @Column({ type: 'varchar', length: 55})
  username: string;

  @Column({ type: 'varchar', length: 55 })
  password: string;

  @PrimaryColumn({ type: 'varchar', length: 55 })
  profession: string;

  @PrimaryGeneratedColumn()
  id: number;

  /**/
  @PrimaryColumn({ type: 'varchar', length: 55})
  eMail: string;

  @Column({ type: 'date'})
  birthDate: Date;

  @Column({ type: 'boolean'})
  IsActive: boolean;

  @Column({ type: 'varchar'})
  language: string;
}