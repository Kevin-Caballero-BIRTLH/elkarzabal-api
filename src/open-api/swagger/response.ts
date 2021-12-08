import { ApiResponseOptions } from '@nestjs/swagger';

export namespace OpenApiResponse {
  export const loginOk: ApiResponseOptions = {
    status: 200,
    description:
      'If user is registered and account activated returns user + token',
  };

  export const registerOk: ApiResponseOptions = {
    status: 201,
    description: 'User created successfully',
  };

  export const loginUnauthorized: ApiResponseOptions = {
    status: 401,
    description:
      'If user is not registered or account is not activated returns unauthorized',
  };

  export const registerBadRequest: ApiResponseOptions = {
    status: 400,
    description: 'Not fulfilling createUserDTO',
  };
}
