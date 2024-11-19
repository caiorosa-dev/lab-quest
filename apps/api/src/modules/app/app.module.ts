import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from '../../shared/prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { UsersModule } from '../user/user.module';
import { LearningTrackModule } from '../learning-track/learning-track.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UsersModule,
    LearningTrackModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
