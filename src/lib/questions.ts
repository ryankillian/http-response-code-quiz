import type { Question } from '$lib/types';

const questions: Question[] = [
	{
		description: `The request has succeeded. The information returned with the response is dependent on the method used in the request, for example: GET an entity corresponding to the requested resource is sent in the response.`,
		code: '200 OK'
	},
	{
		description: `The request has been fulfilled and resulted in a new resource being created. The newly created resource can be referenced by the URI(s) returned in the entity of the response, with the most specific URI for the resource given by a Location header field.`,
		code: '201 Created'
	},
	{
		description: `Its purpose is to allow a server to accept a request for some other process (perhaps a batch-oriented process that is only run once per day) without requiring that the user agent's connection to the server persist until the process is completed.`,
		code: '202 Accepted'
	}
];

export function getQuestion(): Question {
	return questions[Math.floor(Math.random() * questions.length)];
}
