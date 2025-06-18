import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modules/product/product.module';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [ProductModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
