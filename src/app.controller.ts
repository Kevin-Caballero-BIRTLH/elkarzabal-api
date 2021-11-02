import { Controller, Get, Post, Req, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from './components/auth/auth.service';
import { JwtAuthGuard } from './components/auth/jwt-auth.guard';
import { LocalAuthGuard } from './components/auth/local-auth.guard';
import { ERole } from './components/role/entities/erole';
import { Public } from './decorators/public.decorator';
import { Roles } from './decorators/role.decorator';

@Controller()
export class AppController {
  constructor(
    private readonly _appService: AppService,
    private readonly _authService: AuthService,
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

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  getProfile(@Request() req) {
    return req.user;
  }
}
