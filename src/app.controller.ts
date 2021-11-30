import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { AppService } from './app.service';
import { AuthService } from './components/auth/auth.service';
import { JwtAuthGuard } from './components/auth/jwt-auth.guard';
import { LocalAuthGuard } from './components/auth/local-auth.guard';
import { ERole } from './components/role/entities/erole';
import { CreateUserDto } from './components/user/dto/create-user.dto';
import { UserLogin } from './components/user/entities/user-login';
import { UserService } from './components/user/user.service';
import { Public } from './decorators/public.decorator';
import { Roles } from './decorators/role.decorator';
import { OpenApiBody } from './open-api/swagger/body';
import { OpenApiSummary } from './open-api/swagger/summary';

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
    return join(__dirname, '..', 'files');
  }

  @Public()
  @Post('login')
  @UseGuards(LocalAuthGuard)
  @ApiBody(OpenApiBody.loginBody)
  @ApiOperation({ summary: OpenApiSummary.loginSummary })
  login(@Req() req) {
    return this._authService.login(req.user);
  }

  @Public()
  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    return this._userService.create(createUserDto);
  }

  @Get('profile')
  @Roles(ERole.VENDOR, ERole.CUSTOMER)
  @UseGuards(JwtAuthGuard)
  getProfile(@Request() req) {
    return req.user;
  }
}
