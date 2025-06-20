import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ResponseDto } from 'src/common/models/response.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createProductDto: CreateProductDto,
  ): Promise<ResponseDto<Product>> {
    try {
      const newProduct: Product = await this.prisma.products.create({
        data: { ...createProductDto },
        select: {
          id: true,
          name: true,
          description: true,
          price: true,
          inStock: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      return {
        data: newProduct,
        success: true,
        message: 'Product Created Successfully!',
        status: HttpStatus.CREATED,
      };
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'Server Error while creating Product!',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll(): Promise<ResponseDto<Product[]>> {
    try {
      const products: Product[] = await this.prisma.products.findMany({
        select: {
          id: true,
          name: true,
          description: true,
          price: true,
          inStock: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      return {
        data: products,
        success: true,
        message:
          products.length === 0
            ? 'No Products Found'
            : 'Products Fetched Successfully!',
        status: HttpStatus.OK,
      };
    } catch (error) {
      console.error(error);
      throw new HttpException(
        {
          data: null,
          success: false,
          message: 'Server Error while fetching Products',
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: number): Promise<ResponseDto<Product | null>> {
    try {
      const product: Product | null = await this.prisma.products.findUnique({
        where: {
          id: id,
        },
        select: {
          id: true,
          name: true,
          description: true,
          price: true,
          inStock: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      return {
        data: product ? product : null,
        success: product ? true : false,
        message: product
          ? 'Product Fetched Successfully!'
          : `No Product Found with id ${id}`,
        status: product ? HttpStatus.OK : HttpStatus.NOT_FOUND,
      };
    } catch (error) {
      console.error(error);
      throw new HttpException(
        {
          data: null,
          success: false,
          message: 'Server Error while fetching Product!',
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<ResponseDto<Product | null>> {
    try {
      const product: Product | null = await this.prisma.products.update({
        data: {
          ...updateProductDto,
        },
        where: {
          id: id,
        },
        select: {
          id: true,
          name: true,
          description: true,
          price: true,
          inStock: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      return {
        data: product ? product : null,
        success: product ? true : false,
        message: product
          ? 'Product updated Successfully!'
          : `No Product Found with id ${id}`,
        status: product ? HttpStatus.OK : HttpStatus.NOT_FOUND,
      };
    } catch (error) {
      console.error(error);
      throw new HttpException(
        {
          data: null,
          success: false,
          message: 'Server Error while updating Product!',
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: number): Promise<ResponseDto<null>> {
    try {
      const product: Product | null = await this.prisma.products.delete({
        where: {
          id: id,
        },
      });

      return {
        data: null,
        success: product ? true : false,
        message: product
          ? 'Product deleted Successfully!'
          : `No Product Found with id ${id}`,
        status: product ? HttpStatus.OK : HttpStatus.NOT_FOUND,
      };
    } catch (error) {
      console.error(error);
      throw new HttpException(
        {
          data: null,
          success: false,
          message: 'Server Error while deleting Product!',
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
