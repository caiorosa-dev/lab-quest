import { Module } from '@nestjs/common';
import { LearningTrackService } from './learning-track.service';
import { LearningTrackController } from './learning-track.controller';

@Module({
	controllers: [LearningTrackController],
	providers: [LearningTrackService],
})
export class LearningTrackModule { } 