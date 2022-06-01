import type { RequestHandler } from '@sveltejs/kit';
import { getQuestion } from '../../lib/questions';

export const get: RequestHandler = async (event) => {
	return {
		status: 200,
		body: {
			question: getQuestion()
		}
	};
};
