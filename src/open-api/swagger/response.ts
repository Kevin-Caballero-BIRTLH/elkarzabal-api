import { ApiResponseOptions } from '@nestjs/swagger';

export namespace Response {
  export const loginOkResponses: ApiResponseOptions = {
    status: 200,
    description:
      'if user is registered and account activated return self user + token',
  };
  export const loginUnauthorizedResponses: ApiResponseOptions = {
    status: 401,
    description:
      'if user is not registered or account is not activated return unauthorized',
  };
}
