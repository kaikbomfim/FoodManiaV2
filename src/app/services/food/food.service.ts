import { Injectable } from '@angular/core';
import { IFood } from '../../interfaces/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  url = 'http://localhost:3000/foods';

  constructor() { }

  async getAllFoods(): Promise<IFood[]> {
    const data = await fetch(this.url);
    return data.json() ?? [];
  }

  async getFoodById(id: Number): Promise<IFood | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return data.json() ?? {};
  }
}

