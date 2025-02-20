/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UtilityModule } from 'src/shared/utility/utility.module';
import { ChatController } from './chat.controller';

@Module({
  imports: [UtilityModule],
  controllers: [ChatController],
})
export class ChatModule {}
