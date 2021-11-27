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
import { User } from './entities/user.entity';
import { FindOneOptions } from 'typeorm';

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
    const user: User = req.user;
    const queryOptions: FindOneOptions = {
      where: { id: req.user.id },
      relations: ['role'],
    };
    switch (user.roleId) {
      case ERole.CUSTOMER:
        queryOptions.relations.push('orders', 'addresses');
      case ERole.VENDOR:
        queryOptions.relations.push('products', 'addresses');
        break;
      case ERole.ADMIN:
        queryOptions.relations.push('addresses');
        break;
    }
    return this.userService.findOne(queryOptions);
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
