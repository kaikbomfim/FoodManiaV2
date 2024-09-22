import { Component, inject } from '@angular/core';
import { IFood } from '../../interfaces/food';
import { FoodService } from '../../services/food/food.service';
import { FoodComponent } from '../food/food.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-foods',
  standalone: true,
  imports: [FoodComponent, CommonModule],
  templateUrl: './foods.component.html',
  styleUrl: './foods.component.css'
})
export class FoodsComponent {
  foodList: IFood[] = [];
  foodService: FoodService = inject(FoodService);

  constructor() {
    this.foodService.getAllFoods().then((foodList: IFood[]) => {
      this.foodList = foodList;
    })
  }
}
