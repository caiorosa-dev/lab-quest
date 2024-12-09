import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { AuthenticatedUser } from 'src/shared/decorators/authenticated-user.decorator';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) { }

  async signIn(
    identifier: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findByEmailOrPhoneNumber(identifier);

    if (!user) {
      throw new NotFoundException({ message: 'Usuário não encontrado' });
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException({ message: 'Senha inválida' });
    }

    const payload: AuthenticatedUser = { id: user.id, email: user.email, phoneNumber: user.phoneNumber, role: user.role };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
