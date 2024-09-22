import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IFood } from '../../interfaces/food';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './food.component.html',
  styleUrl: './food.component.css'
})
export class FoodComponent {
  @Input() foodData!: IFood;
}
