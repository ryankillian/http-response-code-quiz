import type { Question } from '$lib/types';

const questions: Question[] = [
	{
		code: '100 Continue',
		description:
			'This interim response is used to inform the client that the initial part of the request has been received and has not yet been rejected by the server.'
	},
	{
		code: '101 Switching Protocols',
		description:
			"The server understands and is willing to comply with the client's request, via the Upgrade message header field, for a change in the application protocol being used on this connection."
	},
	{
		code: '200 OK',
		description: `The request has succeeded. The information returned with the response is dependent on the method used in the request, for example: GET an entity corresponding to the requested resource is sent in the response.`
	},
	{
		code: '201 Created',
		description: `The request has been fulfilled and resulted in a new resource being created. The newly created resource can be referenced by the URI(s) returned in the entity of the response, with the most specific URI for the resource given by a Location header field.`
	},
	{
		code: '202 Accepted',
		description: `Its purpose is to allow a server to accept a request for some other process (perhaps a batch-oriented process that is only run once per day) without requiring that the user agent's connection to the server persist until the process is completed.`
	},
	{
		code: '203 Non-Authoritative Information',
		description:
			'The returned metainformation in the entity-header is not the definitive set as available from the origin server, but is gathered from a local or a third-party copy. '
	},
	{
		code: '204 No Content',
		description:
			"This response is primarily intended to allow input for actions to take place without causing a change to the user agent's active document view, although any new or updated metainformation SHOULD be applied to the document currently in the user agent's active view."
	},
	{
		code: '205 Reset Content',
		description:
			'This response is primarily intended to allow input for actions to take place via user input, followed by a clearing of the form in which the input is given so that the user can easily initiate another input action. '
	},
	{
		code: '206 Partial Content',
		description:
			'The server has fulfilled the partial GET request for the resource. The request MUST have included a Range header field indicating the desired range'
	},
	{
		code: '300 Multiple Choices',
		description:
			'The requested resource corresponds to any one of a set of representations, each with its own specific location, and agent-driven negotiation information is being provided so that the user can select a preferred representation and redirect its request to that location.'
	},
	{
		code: '301 Moved Permanently',
		description:
			'The requested resource has been assigned a new permanent URI and any future references to this resource SHOULD use one of the returned URIs.'
	},
	{
		code: '302 Found',
		description: 'The requested resource resides temporarily under a different URI.'
	},
	{
		code: '303 See Other',
		description:
			'The response to the request can be found under a different URI and SHOULD be retrieved using a GET method on that resource. This method exists primarily to allow the output of a POST-activated script to redirect the user agent to a selected resource.'
	},
	{
		code: '304 Not Modified',
		description:
			'If the client has performed a conditional GET request and access is allowed, but the document has not been modified, the server SHOULD respond with this status code.'
	},
	{
		code: '307 Temporary Redirect',
		description: 'The requested resource resides temporarily under a different URI.'
	},
	{
		code: '400 Bad Request',
		description:
			'The request could not be understood by the server due to malformed syntax. The client SHOULD NOT repeat the request without modifications.'
	},
	{
		code: '401 Unauthorized',
		description:
			'The request requires user authentication. The response MUST include a WWW-Authenticate header field containing a challenge applicable to the requested resource. '
	},
	{
		code: '402 Payment Required',
		description:
			'The initial aim for creating this code was using it for digital payment systems, however this status code is used very rarely and no standard convention exists.'
	},
	{
		code: '403 Forbidden',
		description:
			'The server understood the request, but is refusing to fulfill it. Authorization will not help and the request SHOULD NOT be repeated.'
	},
	{
		code: '404 Not Found',
		description:
			'The server has not found anything matching the Request-URI. No indication is given of whether the condition is temporary or permanent. '
	},
	{
		code: '405 Method Not Allowed',
		description:
			'The response MUST include an Allow header containing a list of valid methods for the requested resource.'
	},
	{
		code: '406 Not Acceptable',
		description:
			'The resource identified by the request is only capable of generating response entities which have content characteristics not acceptable according to the accept headers sent in the request.'
	},
	{
		code: '407 Proxy Authentication Required',
		description:
			'This code is similar to 401 (Unauthorized), but indicates that the client must first authenticate itself with the proxy. '
	},
	{
		code: '408 Request Timeout',
		description:
			'The client did not produce a request within the time that the server was prepared to wait. The client MAY repeat the request without modifications at any later time.'
	},
	{
		code: '409 Conflict',
		description:
			'The request could not be completed due to a conflict with the current state of the resource. '
	},
	{
		code: '410 Gone',
		description:
			'The requested resource is no longer available at the server and no forwarding address is known. This condition is expected to be considered permanent.'
	},
	{
		code: '411 Length Required',
		description: 'The server refuses to accept the request without a defined Content- Length. '
	},
	{
		code: '412 Precondition Failed',
		description:
			'The precondition given in one or more of the request-header fields evaluated to false when it was tested on the server.'
	},
	{
		code: '413 Request Entity Too Large',
		description:
			'The server is refusing to process a request because the request entity is larger than the server is willing or able to process.'
	},
	{
		code: '414 Request-URI Too Long',
		description:
			'The server is refusing to service the request because the Request-URI is longer than the server is willing to interpret. '
	},
	{
		code: '301 Moved Permanently',
		description:
			'The requested resource has been assigned a new permanent URI and any future references to this resource SHOULD use one of the returned URIs.'
	},
	{
		code: '415 Unsupported Media Type',
		description:
			'The server is refusing to service the request because the entity of the request is in a format not supported by the requested resource for the requested method.'
	},
	{
		code: '416 Range Not Satisfiable',
		description:
			"The range specified by the Range header field in the request cannot be fulfilled. It's possible that the range is outside the size of the target URI's data."
	},
	{
		code: '417 Expectation Failed',
		description:
			'This response code means the expectation indicated by the Expect request header field cannot be met by the server.'
	},
	{
		code: "418 I'm a teapot",
		description: 'The server refuses the attempt to brew coffee with a teapot.'
	},
	{
		code: '422 Unprocessable Entity',
		description: 'The request was well-formed but was unable to be followed due to semantic errors.'
	},
	{
		code: '425 Too Early',
		description:
			'Indicates that the server is unwilling to risk processing a request that might be replayed.'
	},
	{
		code: '426 Upgrade Required',
		description:
			'The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.'
	},
	{
		code: '428 Precondition Required',
		description:
			"The origin server requires the request to be conditional. This response is intended to prevent the 'lost update' problem"
	},
	{
		code: '429 Too Many Requests',
		description: 'The user has sent too many requests in a given amount of time .'
	},
	{
		code: '431 Request Header Fields Too Large',
		description:
			'The server is unwilling to process the request because its header fields are too large. '
	},
	{
		code: '451 Unavailable For Legal Reasons',
		description:
			'The user agent requested a resource that cannot legally be provided, such as a web page censored by a government.'
	},
	{
		code: '500 Internal Server Error',
		description: 'The server has encountered a situation it does not know how to handle.'
	},
	{
		code: '501 Not Implemented',
		description: 'The request method is not supported by the server and cannot be handled.'
	},
	{
		code: '502 Bad Gateway',
		description:
			'This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.'
	},
	{
		code: '503 Service Unavailable',
		description:
			'The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded.'
	},
	{
		code: '504 Gateway Timeout',
		description:
			'This error response is given when the server is acting as a gateway and cannot get a response in time.'
	},
	{
		code: '505 HTTP Version Not Supported',
		description: 'The HTTP version used in the request is not supported by the server.'
	},
	{
		code: '506 Variant Also Negotiates',
		description:
			'The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.'
	},
	{
		code: '507 Insufficient Storage',
		description:
			'The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.'
	},
	{
		code: '508 Loop Detected',
		description: 'The server detected an infinite loop while processing the request.'
	},
	{
		code: '510 Not Extended',
		description: 'Further extensions to the request are required for the server to fulfill it.'
	},
	{
		code: '511 Network Authentication Required',
		description: 'Indicates that the client needs to authenticate to gain network access.'
	}
];

export function getQuestion(): Question {
	return questions[Math.floor(Math.random() * questions.length)];
}
