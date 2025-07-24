import httpStatus from "http-status";

// constants
export const SUCCESS_STATUS_CODE = [
	httpStatus.CREATED, // 201 - Created
	httpStatus.OK, // 200 - OK
	httpStatus.ACCEPTED, // 202 - Accepted
	httpStatus.NO_CONTENT, // 204 - No Content
];
export const ERROR_STATUS_CODE = [
	httpStatus.BAD_REQUEST, // 400 - Bad Request
	httpStatus.UNAUTHORIZED, // 401 - Unauthorized
	httpStatus.FORBIDDEN, // 403 - Forbidden
	httpStatus.NOT_FOUND, // 404 - Not Found
	httpStatus.METHOD_NOT_ALLOWED, // 405 - Method Not Allowed
	httpStatus.NOT_ACCEPTABLE, // 406 - Not Acceptable
	httpStatus.CONFLICT, // 409 - Conflict
	httpStatus.UNPROCESSABLE_ENTITY, // 422 - Unprocessable Entity
	httpStatus.TOO_MANY_REQUESTS, // 429 - Too Many Requests
	httpStatus.INTERNAL_SERVER_ERROR, // 500 - Internal Server Error
];

// types
export type SuccessStatusCodeType = (typeof SUCCESS_STATUS_CODE)[number];
export type ErrorStatusCodeType = (typeof ERROR_STATUS_CODE)[number];

export type FormatResponseSuccessObjectType<T> = T;
export type FormatResponseErrorObjectType = { message?: string | undefined };
