import { Controller, Logger, Post, Body } from '@nestjs/common';

import { UserService } from './user.service';
import { User } from './dto';

@Controller('user')
export class UserController {
  private readonly logger = new Logger(UserController.name);

  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() user: User) {
    this.logger.log('Creating user');
    return this.userService.createUser(user);
  }
}
