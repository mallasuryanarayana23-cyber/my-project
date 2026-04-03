export class ApiError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public code: string = 'INTERNAL_ERROR',
    public details?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }

  static BadRequest(message: string, code: string = 'BAD_REQUEST', details?: any) {
    return new ApiError(400, message, code, details);
  }

  static Unauthorized(message: string = 'Unauthorized', code: string = 'UNAUTHORIZED') {
    return new ApiError(401, message, code);
  }

  static Forbidden(message: string = 'Forbidden', code: string = 'FORBIDDEN') {
    return new ApiError(403, message, code);
  }

  static NotFound(message: string = 'Resource not found', code: string = 'NOT_FOUND') {
    return new ApiError(404, message, code);
  }

  static Internal(message: string = 'An unexpected error occurred', code: string = 'INTERNAL_ERROR') {
    return new ApiError(500, message, code);
  }
}
