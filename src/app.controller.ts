import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { AuthService } from './components/auth/auth.service';
import { LocalAuthGuard } from './components/auth/local-auth.guard';
import { CreateUserDto } from './components/user/dto/create-user.dto';
import { UserService } from './components/user/user.service';
import { Public } from './decorators/public.decorator';
import { OpenApiBody } from './open-api/swagger/body';
import { OpenApiResponse } from './open-api/swagger/response';
import { OpenApiSummary } from './open-api/swagger/summary';

@ApiTags('APP')
@Controller()
export class AppController {
  constructor(
    private readonly _appService: AppService,
    private readonly _authService: AuthService,
    private readonly _userService: UserService,
  ) {}

  @Public()
  @Post('login')
  @UseGuards(LocalAuthGuard)
  @ApiBody(OpenApiBody.loginBody)
  @ApiResponse(OpenApiResponse.APPloginOk)
  @ApiResponse(OpenApiResponse.APPloginUnauthorized)
  @ApiOperation({ summary: OpenApiSummary.login })
  login(@Req() req) {
    return this._authService.login(req.user);
  }

  @Public()
  @Post('register')
  @ApiResponse(OpenApiResponse.APPregisterOk)
  @ApiResponse(OpenApiResponse.APPregisterBadRequest)
  @ApiOperation({ summary: OpenApiSummary.register })
  register(@Body() createUserDto: CreateUserDto) {
    return this._userService.create(createUserDto);
  }
}
