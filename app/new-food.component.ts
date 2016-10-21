import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'new-food',
  template: `
    <div *ngIf="show">
      <h2>New Food</h2>
      <div class="form-group">
        <label for="name">Food</label>
        <input #name class="form-control" type="text">
      </div>
      <div class="form-group">
        <label for="details">Details</label>
        <input #details class="form-control" type="text">
      </div>
      <div class="form-group">
        <label for="calories">Calories</label>
        <input #calories class="form-control" type="text">
      </div>
      <button class="btn" (click)="addFood(name.value, details.value, calories.value);
      name.value = '';
      details.value = '';
      calories.value = '';">Add Food</button> 
    </div>
  `
})

export class NewFoodModule {

}
