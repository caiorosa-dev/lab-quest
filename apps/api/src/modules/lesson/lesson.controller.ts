import { Controller, Param, Post } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { AuthenticatedUser } from 'src/shared/decorators/authenticated-user.decorator';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('lessons')
export class LessonController {
	constructor(private readonly lessonService: LessonService) { }

	@Post(':id')
	@ApiBearerAuth()
	@ApiOperation({ summary: 'Start a lesson' })
	@ApiResponse({ status: 200, description: 'Lesson started successfully.' })
	@ApiResponse({ status: 404, description: 'Lesson not found.' })
	@ApiResponse({ status: 403, description: 'Forbidden.' })
	start(@Param('id') id: string, @AuthenticatedUser() user: AuthenticatedUser) {
		return this.lessonService.start(id, user.id);
	}

	@Post(':id/finish')
	@ApiBearerAuth()
	@ApiOperation({ summary: 'Finish a lesson' })
	@ApiResponse({ status: 200, description: 'Lesson finished successfully.' })
	@ApiResponse({ status: 404, description: 'Lesson not found.' })
	@ApiResponse({ status: 403, description: 'Forbidden.' })
	finish(@Param('id') id: string, @AuthenticatedUser() user: AuthenticatedUser) {
		return this.lessonService.finish(id, user.id);
	}
}