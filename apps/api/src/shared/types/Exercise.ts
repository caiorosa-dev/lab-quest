type BaseExercise = {
	id: string;
	lessonId: string;
	wrongMessage?: string;
}

export type Answer = {
	id: string;
	label: string;
	correct: boolean;
}

export type UniqueAnswerExercise = BaseExercise & {
	type: 'unique_answer';
	data: {
		question: string;
		answers: Answer[];
	}
};

export type MultipleChoiceExercise = BaseExercise & {
	type: 'multiple_choice';
	data: {
		question: string;
		answers: Answer[];
	}
}

export type TrueFalseExercise = BaseExercise & {
	type: 'true_false';
	data: {
		question: string;
		correctAnswer: boolean;
	}
}

export type FillInExercise = BaseExercise & {
	type: 'fill_in';
	data: {
		question: string;
		correctAnswer: string;
	}
}

export type MatchingExercise = BaseExercise & {
	type: 'matching';
	data: {
		question: string;
		pairs: { item: string; match: string }[];
	}
}

export type Exercise =
	| UniqueAnswerExercise
	| MultipleChoiceExercise
	| TrueFalseExercise
	| FillInExercise
	| MatchingExercise;
