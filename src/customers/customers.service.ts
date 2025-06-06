import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [];

  create(createCustomerDto: CreateCustomerDto) {
    const customer: Customer = {
      id: uuid(),
      name: createCustomerDto.name,
      email: createCustomerDto.email,
      createdAt: Date.now(),
    };

    this.customers.push(customer);
    return customer;
  }

  findAll() {
    return this.customers;
  }

  findOne(id: string) {
    const customer = this.customers.find((cust) => cust.id === id);
    if (!customer) throw new NotFoundException(`Customer with id "${id}" not found`);
    return customer;
  }

  update(id: string, updateCustomerDto: UpdateCustomerDto) {
    const customer = this.findOne(id);
    this.customers = this.customers.map((cust) => {
      if (cust.id === id) {
        return {
          ...cust,
          ...updateCustomerDto,
          updatedAt: Date.now(),
        };
      }
      return cust;
    });
    return { ...customer, ...updateCustomerDto };
  }

  remove(id: string) {
    this.findOne(id);
    this.customers = this.customers.filter((cust) => cust.id !== id);
  }

  llenarDataClientes(customers: Customer[]) {
    this.customers = customers;
  }
}
