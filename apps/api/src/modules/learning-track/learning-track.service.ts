import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class LearningTrackService {
	constructor(private prisma: PrismaService) { }

	async findAll() {
		return this.prisma.learningTrack.findMany();
	}

	async findOne(id: string) {
		return this.prisma.learningTrack.findUnique({ where: { id } });
	}

	async create(data: { name: string }) {
		return this.prisma.learningTrack.create({ data });
	}

	async update(id: string, data: { name?: string }) {
		return this.prisma.learningTrack.update({
			where: { id },
			data,
		});
	}

	async remove(id: string) {
		return this.prisma.learningTrack.delete({ where: { id } });
	}
} 