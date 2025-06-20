import { HttpStatus } from '@nestjs/common';

export type ResponseDto<T> = {
  data: T;
  success: boolean;
  message: string;
  status: HttpStatus;
};
