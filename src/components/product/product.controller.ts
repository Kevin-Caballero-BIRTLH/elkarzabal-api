import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
  UploadedFiles,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Roles } from 'src/decorators/role.decorator';
import { ERole } from '../role/entities/erole';
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import * as fs from 'fs';
import { join } from 'path';
import { ConfigService } from '@nestjs/config';
import { config } from 'src/config/config';

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly configService: ConfigService,
  ) {}

  @Post()
  @UseInterceptors(AnyFilesInterceptor())
  @Roles(ERole.VENDOR)
  create(
    @Request() req,
    @Body() createProductDto: CreateProductDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    const paths = files.map((f) => {
      const fileExtension: string = f.originalname.split('.').pop();
      const generatedName: string = (Math.random() + 1)
        .toString(36)
        .substring(2);

      const path = `http://${this.configService.get(
        config.api.host,
      )}:${this.configService.get(
        config.api.port,
      )}/files/${generatedName}.${fileExtension}`;

      const filename = `./files/${generatedName}.${fileExtension}`;

      try {
        fs.writeFileSync(filename, f.buffer);
      } catch (error) {
        throw new BadRequestException(error);
      }

      return path;
    });

    createProductDto.userId = req.user.id;
    return this.productService.create(createProductDto, JSON.stringify(paths));
  }

  //GET ACTIVE PRODUCTS
  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get('base')
  findAllBaseProducts() {
    return this.productService.findAllBaseProduct();
  }

  @Get('mine')
  findAllMyProducts(@Request() req) {
    return this.productService.findAllMyProducts(req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne({ where: { id: +id } });
  }

  @Patch(':id')
  @Roles(ERole.VENDOR)
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Roles(ERole.VENDOR)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
