import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'food-list',
  template: `
    <div *ngFor="let currentDate of childAllDates" class="well">
      <h3>Day: {{ currentDate }}</h3>
      <div *ngIf="selectedTotalCalories == 0">
        <button class="btn" (click)="getCaloriesForDay(currentDate)">Total Calories</button>
      </div>
      <div *ngIf="selectedTotalCalories > 0">
        <p>Total Calories: {{ selectedTotalCalories }}</p>
      </div>
      <hr>
      <div *ngFor="let currentFood of childAllFoods | dates:currentDate | calories:childCalorieFilter">
        <food-display
          [date]="currentDate"
          [food]="currentFood"
          (clickSender)="editFood($event)"
        ></food-display>
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

  selectedTotalCalories: number = 0;

  editFood(_selectedFood: Food) {
    this.clickSender.emit(_selectedFood);
  }

  getCaloriesForDay(_selectedDay: string) {
    var index: number = this.childAllDates.indexOf(_selectedDay)
    for(var i = 0; i < this.childTotalCaloriesByDay.length; i++) {
      if(i == index) {
        this.selectedTotalCalories = this.childTotalCaloriesByDay[i];
      }
    }
  }
}
