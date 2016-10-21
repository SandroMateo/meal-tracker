import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <h1>Meal Tracker</h1>
  <new-food
  ></new-food>
  `
})

export class AppComponent {
  allFoods: Food[] = [
    new Food("Salad", "The same big salad I eat every day for lunch", 350),
    new Food("Trail Mix", "handful of almonds, walnuts, and raisins", 250),
    new Food("Burrito", "chicken burrito with guacamole, sour cream, beans, rice, spinach, salsa, and cheese", 600),
    new Food("Chocolate Hazelnut Scone", "really sugary, but delicious", 100)
  ];
}
