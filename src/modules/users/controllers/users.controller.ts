import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserInput } from '../dto/input/user.input';
import { UsersMapper } from '../dto/mapper/users.mapper';
import { UserOutput } from '../dto/output/user.output';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


  // SAMPLE CONTROLLER //

  @Post('create')
  async createUser(
    @Body() createUserInput: CreateUserInput,
  ): Promise<UserOutput> {
    const data = await this.usersService.createUser(createUserInput);
    return UsersMapper.displayOne(data);
  }
}
