import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './components/auth/auth.service';
import { JwtAuthGuard } from './components/auth/jwt-auth.guard';
import { LocalAuthGuard } from './components/auth/local-auth.guard';
import { CreateUserDto } from './components/user/dto/create-user.dto';
import { UserService } from './components/user/user.service';
import { Public } from './decorators/public.decorator';

@Controller()
export class AppController {
  constructor(
    private readonly _appService: AppService,
    private readonly _authService: AuthService,
    private readonly _userService: UserService,
  ) {}

  @Public()
  @Get()
  getHello(): string {
    return this._appService.getHello();
  }

  @Public()
  @Post('login')
  @UseGuards(LocalAuthGuard)
  login(@Req() req) {
    return this._authService.login(req.user);
  }

  @Public()
  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    return this._userService.create(createUserDto);
  }
  @Get('profile')
  @UseGuards(JwtAuthGuard)
  getProfile(@Request() req) {
    return req.user;
  }
}
