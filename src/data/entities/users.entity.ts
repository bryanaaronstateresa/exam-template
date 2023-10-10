import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  // SAMPLE ENTITY //

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, name: 'email' })
  email: string;

  @Exclude()
  @Column({ nullable: true })
  password?: string;
}
