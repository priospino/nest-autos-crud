import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { CarsService } from './cars/cars.service';
import { BrandsModule } from './brands/brands.module';
import { SeedModule } from './seed/seed.module';
import { CustomersModule } from './customers/customers.module';


@Module({
  imports: [CarsModule, BrandsModule, SeedModule, CustomersModule],
  controllers: [],
  providers: [ CarsService],
  exports: [ ]
})
export class AppModule {}
