import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { LearningTrackService } from './learning-track.service';
import { UserRole } from '@prisma/client';
import { Roles } from 'src/shared/decorators/roles.decorator';
import { AuthenticatedUser } from 'src/shared/decorators/authenticated-user.decorator';

@ApiTags('learning-tracks')
@Controller('learning-tracks')
export class LearningTrackController {
	constructor(private readonly learningTrackService: LearningTrackService) { }

	@Get()
	@ApiBearerAuth()
	@ApiOperation({ summary: 'Retrieve all learning tracks' })
	@ApiResponse({ status: 200, description: 'List of learning tracks retrieved successfully.' })
	findAll() {
		return this.learningTrackService.findAll();
	}

	@Get('/current')
	@ApiBearerAuth()
	@ApiOperation({ summary: 'Retrieve the current learning track information' })
	@ApiResponse({ status: 200, description: 'Current learning track information retrieved successfully.' })
	@ApiResponse({ status: 404, description: 'Learning track not found.' })
	getCurrentInfo(@AuthenticatedUser() user: AuthenticatedUser) {
		return this.learningTrackService.getCurrentInfo(user.id);
	}

	@Get(':id')
	@ApiBearerAuth()
	@ApiOperation({ summary: 'Retrieve a specific learning track by ID' })
	@ApiResponse({ status: 200, description: 'Learning track retrieved successfully.' })
	@ApiResponse({ status: 404, description: 'Learning track not found.' })
	findOne(@Param('id') id: string) {
		return this.learningTrackService.findOne(id);
	}

	@Post()
	@Roles(UserRole.admin)
	@ApiBearerAuth()
	@ApiOperation({ summary: 'Create a new learning track' })
	@ApiResponse({ status: 201, description: 'Learning track created successfully.' })
	@ApiResponse({ status: 403, description: 'Forbidden.' })
	create(@Body() data: { name: string }) {
		return this.learningTrackService.create(data);
	}

	@Put(':id')
	@Roles(UserRole.admin)
	@ApiBearerAuth()
	@ApiOperation({ summary: 'Update an existing learning track' })
	@ApiResponse({ status: 200, description: 'Learning track updated successfully.' })
	@ApiResponse({ status: 404, description: 'Learning track not found.' })
	@ApiResponse({ status: 403, description: 'Forbidden.' })
	update(@Param('id') id: string, @Body() data: { name?: string }) {
		return this.learningTrackService.update(id, data);
	}

	@Delete(':id')
	@Roles(UserRole.admin)
	@ApiBearerAuth()
	@ApiOperation({ summary: 'Delete a learning track' })
	@ApiResponse({ status: 200, description: 'Learning track deleted successfully.' })
	@ApiResponse({ status: 404, description: 'Learning track not found.' })
	@ApiResponse({ status: 403, description: 'Forbidden.' })
	remove(@Param('id') id: string) {
		return this.learningTrackService.remove(id);
	}
} 