import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Food } from './food.entity';
import { Repository } from 'typeorm';
import { CreateFoodDto } from './dto/create-food.dto';

@Injectable()
export class FoodService {
  constructor(
    @InjectRepository(Food) private readonly foodRespository: Repository<Food>,
  ) {}

  create(createFoodDto: CreateFoodDto): Promise<Food> {
    const food = new Food();
    food.name = createFoodDto.name;
    food.descripcion = createFoodDto.descripcion;
    food.category = createFoodDto.category;
    food.image = createFoodDto.image;
    food.price = createFoodDto.price;
    return this.foodRespository.save(food);
  }
}
