import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'food-list',
  template: `
    <div *ngFor="let currentFood of childAllFoods | calories:childCalorieFilter">
      <food-display
        [food]="currentFood"
      ></food-display>
      <button class="btn" (click)="editFood(currentFood)">Edit</button>
    </div>
  `
})

export class FoodListComponent {
  @Input() childAllFoods: Food[];
  @Input() childCalorieFilter: string;
  @Output() clickSender = new EventEmitter();

  editFood(_selectedFood: Food) {
    this.clickSender.emit(_selectedFood);
  }
}
