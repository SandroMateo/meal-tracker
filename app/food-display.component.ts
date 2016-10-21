import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'food-display',
  template: `
    <h2> {{ food.name }} </h2>
    <p> {{ food.details }} </p>
    <p> {{ food.calories }} </p>
  `
})

export class FoodDisplayComponent {
  
}
