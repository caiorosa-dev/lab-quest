import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class SignInDto {
  @ApiProperty({
    description: 'User email or phone number for sign-in',
    example: 'user@example.com',
  })
  identifier: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty({
    description: 'User password for sign-in',
    example: 'securePassword123',
    minLength: 3,
  })
  password: string;
}
