import { UserEntity } from '@entities/users.entity';
import { UserOutput } from '../output/user.output';

export class UsersMapper {
  static displayOne(user: UserEntity): UserOutput {
    if (!user) {
      return undefined;
    }

    return {
      id: user.id,
      email: user.email,
    };
  }

  static displayAll(users: UserEntity[]): UserOutput[] {
    if (!users || users.length <= 0) {
      return [];
    }

    return users.map((user) => this.displayOne(user));
  }
}
