import { Injectable, Logger } from '@nestjs/common';

import { UserDTO } from './dto';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  async createUser(dto: UserDTO) {
    this.logger.log(`Creating user: ${JSON.stringify(dto)}`);
    return { success: true };
  }
}
