import { Injectable, Logger, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { timeout, catchError, throwError, firstValueFrom } from 'rxjs';

import { User } from './dto';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(
    @Inject('USER_SERVICE') private readonly userClient: ClientProxy,
  ) {}

  private send(pattern: any, data: any): Promise<any> {
    const res$ = this.userClient.send(pattern, data).pipe(
      timeout(10000),
      catchError((e: Error) => {
        this.logger.error(e);
        return throwError(() => e);
      }),
    );

    return firstValueFrom(res$);
  }

  async createUser(dto: User) {
    this.logger.log('Creating user');
    return this.send({ cmd: 'create_user' }, dto);
  }
}
