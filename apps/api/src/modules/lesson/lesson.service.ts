import { NotFoundException } from '@nestjs/common';
import { Lesson } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma/prisma.service';

export class LessonService {
	constructor(private readonly prisma: PrismaService) { }

	async start(id: string, userId: string) {
		const user = await this.prisma.user.findUnique({
			where: { id: userId },
		});

		if (!user) {
			throw new NotFoundException('User not found');
		}

		const lesson = await this.prisma.lesson.findUnique({
			where: { id },
			include: {
				exercises: true,
			}
		});

		if (!lesson) {
			throw new NotFoundException('Lesson not found');
		}

		await this.verifyIfHasOpenAnswersAndRemove(lesson);

		const answer = await this.prisma.lessonAnswer.create({
			data: {
				userId,
				lessonId: lesson.id,
				initializedAt: new Date(),
				totalAmountOfAnswers: lesson.exercises.length,
			}
		})

		return {
			exercises: lesson.exercises,
			answer,
		};
	}

	private async verifyIfHasOpenAnswersAndRemove(lesson: Lesson) {
		const answers = await this.prisma.lessonAnswer.findMany({
			where: {
				lessonId: lesson.id,
				approved: false,
			}
		});

		if (answers.length > 0) {
			await this.prisma.lessonAnswer.deleteMany({
				where: {
					lessonId: lesson.id,
					approved: false,
				},
			});
		}
	}
}
