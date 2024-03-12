import { Body, Controller, Get, Post } from '@nestjs/common';
import { FoodService } from './food.service';
import { CreateFoodDto } from './dto/create-food.dto';
import { Food } from './food.entity';

@Controller('food')
export class FoodController {
  //Instancia del servicio FoodServoce
  constructor(private readonly serviceFood: FoodService) {}

  @Post()
  create(@Body() createFoodDto: CreateFoodDto): Promise<Food> {
    return this.serviceFood.create(createFoodDto);
  }
  @Get()
  findAll(): Promise<Food[]> {
    return this.serviceFood.findAll();
  }
}
