import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  Request,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { Roles } from 'src/decorators/role.decorator';
import { ERole } from '../role/entities/erole';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @Roles(ERole.ADMIN)
  findAll() {
    return this.userService.findAll();
  }

  @Get('profile')
  findOne(@Request() req) {
    return this.userService.findOne({ where: { id: req.user.id } });
  }

  @Patch('update')
  update(@Request() req, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(req.user.id, updateUserDto);
  }

  @Delete('inactivate')
  remove(@Request() req) {
    return this.userService.update(req.user.id, { active: false });
  }

  @Patch('reactivate/:id')
  @Roles(ERole.ADMIN)
  reactivate(@Param('id') id: string) {
    return this.userService.update(+id, { active: true });
  }
}
