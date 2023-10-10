import { UserEntity } from '@entities/users.entity';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { CreateUserInput } from '../dto/input/user.input';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  // SAMPLE SERVICE //

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
  }

  async createUser(createUserInput: CreateUserInput) {
    const userExist = await this.userRepository.findOne({
      where: { email: createUserInput.email },
    });

    if (userExist) {
      throw new BadRequestException('user.USER_ALREADY_REGISTERED');
    }

    const createdUser = await this.userRepository.save({
      email: createUserInput.email.toLowerCase(),
      password: await this.hashPassword(createUserInput.password),
    });
    return this.userRepository.findOne({ where: { id: createdUser.id } });
  }
}
