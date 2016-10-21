import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'food-list',
  template: `
    <div *ngFor="let currentFood of childAllFoods">
      <food-display
        [food]="currentFood"
      ></food-display>
      <button class="btn" (click)="editFood(currentFood)">Edit</button>
    </div>
  `
})

export class FoodListComponent {

}
