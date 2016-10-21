import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <button class="btn" (click)="accessNewFoodForm()">Add Food</button>
    <food-filter
      [childAverageCaloriesPerDay] = "averageCaloriesPerDay"
      (clickSender) = "setCalorieFilter($event)"
    ></food-filter>
    <new-food
      [show]="showNewFoodForm"
      (clickSender)="addNewFood($event)"
    ></new-food>
    <div *ngIf="averageCaloriesPerDay > 0">
      <h2>Average Calories Per Day: {{ averageCaloriesPerDay }}</h2>
    </div>
    <food-list
      [childAllDates]="allDates"
      [childTotalCaloriesByDay]="totalCaloriesByDay"
      [childAllFoods]="allFoods"
      [childCalorieFilter] = "calorieFilter"
      (clickSender)="editSelectedFood($event)"
    ></food-list>
    <edit-food
      [childSelectedFood]="selectedFood"
      (clickSender)="finishEditing()"
    ></edit-food>
  </div>
  `
})

export class AppComponent {
  allFoods: Food[] = [];

  allDates: string[] = [];
  totalCaloriesByDay: number [] = [];
  averageCaloriesPerDay: number = 0;

  showNewFoodForm: boolean = false;
  selectedFood: Food = null;
  calorieFilter: string = "all";

  accessNewFoodForm() {
    this.showNewFoodForm = true;
  }

  addNewFood(_newFood: Food) {
    this.allFoods.push(_newFood);
    this.showNewFoodForm = false;
    if(this.checkNewDate(_newFood.dateLogged)) {
      this.allDates.push(_newFood.dateLogged);
    }
    this.getTotalCaloriesByDay();
    this.calculateAverageCaloriesPerDay();
    console.log(this.allDates);
  }

  checkNewDate(_newDate: string) {
    var addDate: boolean = false;
    for(var i = 0; i < this.allDates.length; i++) {
      if(_newDate == this.allDates[i]) {
        return addDate;
      }
    }
    addDate = true;
    return addDate;
  }

  editSelectedFood(_selectedFood: Food) {
    this.selectedFood = _selectedFood;
  }

  finishEditing() {
    this.selectedFood = null;
  }

  setCalorieFilter(_calorieFilter: string) {
    this.calorieFilter = _calorieFilter;
  }

  getTotalCaloriesByDay() {
    var _totalCaloriesByDay: number[] = [];
    var totalCalories: number = 0;
    for(var i = 0; i < this.allDates.length; i++) {
      for(var j = 0; j < this.allFoods.length; j++) {
        if(this.allFoods[j].dateLogged == this.allDates[i]) {
          totalCalories += this.allFoods[j].calories;
        }
      }
      _totalCaloriesByDay.push(totalCalories);
      totalCalories = 0;
    }
    this.totalCaloriesByDay = _totalCaloriesByDay;
  }

  calculateAverageCaloriesPerDay() {
    var _totalCalories: number = 0;
    for(var i = 0; i < this.totalCaloriesByDay.length; i++) {
      _totalCalories += this.totalCaloriesByDay[i];
    }
    this.averageCaloriesPerDay = _totalCalories / this.totalCaloriesByDay.length;
  }
}
