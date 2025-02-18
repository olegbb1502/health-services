import { Logger, Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { UserService } from './user.service';
import { UserDTO } from './dto';

@Controller('user')
export class UserController {
  private readonly logger = new Logger(UserController.name);

  constructor(private readonly userService: UserService) {}

  @MessagePattern({ cmd: 'create_user' })
  async createUser(dto: UserDTO) {
    console.log(dto);
    this.logger.log('Creating user');
    return this.userService.createUser(dto);
  }
}
