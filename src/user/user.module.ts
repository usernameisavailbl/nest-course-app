/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UtilityModule } from 'src/shared/utility/utility.module';
import { UserController } from './user.controller';

@Module({
  imports: [UtilityModule],
  controllers: [UserController],
})
export class UserModule {}
