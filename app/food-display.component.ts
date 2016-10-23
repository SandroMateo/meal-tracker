import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'food-display',
  template: `
    <h4 class="food-name"> {{ food.name }} <span><img class="image-responsive edit" src="../../resources/images/edit.png" (click)="editFood(food)"></span></h4>
    <p>Details: {{ food.details }} </p>
    <p>Calories: {{ food.calories }} </p>
  `
})

export class FoodDisplayComponent {
  @Input() food: Food;
  @Input() date: string;
  @Output() clickSender = new EventEmitter();

  editFood(_selectedFood: Food) {
    this.clickSender.emit(_selectedFood);
  }
}
