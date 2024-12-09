import { Injectable, NotFoundException } from '@nestjs/common';
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

	async getCurrentInfo(userId: string) {
		const user = await this.prisma.user.findUnique({ where: { id: userId } });

		if (!user) {
			throw new NotFoundException('User not found');
		}

		const learningTrack = await this.prisma.learningTrack.findFirst({
			where: {
				id: user.currentLearningTrackId
			}
		});

		if (!learningTrack) {
			throw new NotFoundException('Learning track not found');
		}

		const chapters = await this.prisma.chapter.findMany({
			where: {
				learningTrackId: learningTrack.id
			},
			include: {
				lessons: {
					include: {
						answers: {
							where: {
								userId,
							}
						},
					}
				}
			}
		});

		const chapterTree = chapters.map(chapter => {
			const completedLessons = chapter.lessons.filter(lesson => lesson.answers.length > 0 && lesson.answers[0].approved).length;
			const totalLessons = chapter.lessons.length;
			const completed = completedLessons === totalLessons;

			return {
				id: chapter.id,
				name: chapter.name,
				lessons: chapter.lessons.map(lesson => ({
					id: lesson.id,
					number: lesson.number,
					completed: lesson.answers.length > 0 && lesson.answers[0].approved,
				})),
				totalLessonsNumber: chapter.lessons.length,
				completedLessonsNumber: completedLessons,
				completed,
				knowledgeData: completed && chapter.knowledgeData,
			}
		});

		return {
			learningTrack,
			chapters: chapterTree
		};
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