import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'edit-food',
  template: `
  <div *ngIf="show">
    <h2>New Food</h2>
    <div class="form-group">
      <label for="name">Food: </label>
      <input [(ngModel)]="food.name" class="form-control" type="text">
    </div>
    <div class="form-group">
      <label for="details">Details: </label>
      <input [(ngModel)]="food.details" class="form-control" type="text">
    </div>
    <div class="form-group">
      <label for="calories">Calories: </label>
      <input [(ngModel)]="food.calories" class="form-control" type="text">
    </div>
    <button class="btn" (click)="finishEdit()">Finish</button>
  </div>
  `
})

export class EditFoodComponent {

}
