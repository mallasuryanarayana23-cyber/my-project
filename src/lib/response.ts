import { NextResponse } from 'next/server';
import { ApiError } from './error';

export const ApiResponse = {
  success<T>(data: T, status: number = 200) {
    return NextResponse.json(
      {
        success: true,
        data,
      },
      { status }
    );
  },

  error(error: unknown) {
    if (error instanceof ApiError) {
      return NextResponse.json(
        {
          success: false,
          error: {
            message: error.message,
            code: error.code,
            details: error.details,
          },
        },
        { status: error.statusCode }
      );
    }

    console.error('[API_ERROR_INTERNAL]:', error);

    return NextResponse.json(
      {
        success: false,
        error: {
          message: 'An unexpected internal error occurred',
          code: 'INTERNAL_ERROR',
        },
      },
      { status: 500 }
    );
  },
};
