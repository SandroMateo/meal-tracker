import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
      <div class="navbar-left">
        <food-filter
          [childAverageCaloriesPerDay] = "averageCaloriesPerDay"
          (clickSender) = "setCalorieFilter($event)"
        ></food-filter>
      </div>
      <div class="navbar-right">
        <button class="btn" id="new-meal-btn" (click)="accessNewFoodForm()">Add Food</button>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="jumbotron">
      <h1>Meal Tracker</h1>
    </div>
    <div *ngIf="averageCaloriesPerDay > 0">
      <h2>Average Calories Per Day: {{ averageCaloriesPerDay }}</h2>
    </div>
    <div class="row">
      <div class="col-md-8">
        <food-list
          [childAllDates]="allDates"
          [childTotalCaloriesByDay]="totalCaloriesByDay"
          [childAllFoods]="allFoods"
          [childCalorieFilter] = "calorieFilter"
          (clickSender)="editSelectedFood($event)"
        ></food-list>
      </div>
      <div class="col-md-4">
        <new-food
          [show]="showNewFoodForm"
          (clickSender)="addNewFood($event)"
        ></new-food>
        <edit-food
          [childSelectedFood]="selectedFood"
          (clickSender)="finishEditing()"
        ></edit-food>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  allFoods: Food[] = [
    new Food("Salad", "The same big salad I eat every day for lunch", 350),
    new Food("Trail Mix", "handful of almonds, walnuts, and raisins", 250),
    new Food("Burrito", "chicken burrito with guacamole, sour cream, beans, rice, spinach, salsa, and cheese", 600),
    new Food("Chocolate Hazelnut Scone", "really sugary, but delicious", 100)
  ];

  allDates: string[] = ["10/22/2016"];
  totalCaloriesByDay: number [] = [1300];
  averageCaloriesPerDay: number = 1300;

  showNewFoodForm: boolean = false;
  selectedFood: Food = null;
  calorieFilter: string = "all";

  accessNewFoodForm() {
    this.showNewFoodForm = true;
    this.selectedFood = null;
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
    this.showNewFoodForm = false;
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
