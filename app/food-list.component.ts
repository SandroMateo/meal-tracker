import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'food-list',
  template: `
    <div *ngFor="let currentDate of childAllDates" class="well">
      <div *ngFor="let currentFood of childAllFoods | dates:currentDate | calories:childCalorieFilter">
        <food-display
          [date]="currentDate"
          [food]="currentFood"
        ></food-display>
        <button class="btn" (click)="editFood(currentFood)">Edit</button>
        <hr>
      </div>
    </div>
  `
})

export class FoodListComponent {
  @Input() childAllDates: string[];
  @Input() childTotalCaloriesByDay: number[];
  @Input() childAllFoods: Food[];
  @Input() childCalorieFilter: string;
  @Output() clickSender = new EventEmitter();

  editFood(_selectedFood: Food) {
    this.clickSender.emit(_selectedFood);
  }
}
