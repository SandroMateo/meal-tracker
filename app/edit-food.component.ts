import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'edit-food',
  template: `
  <div *ngIf="childSelectedFood">
    <h2>Edit Food</h2>
    <div class="form-group">
      <label for="name">Food: </label>
      <input [(ngModel)]="childSelectedFood.name" class="form-control" type="text">
    </div>
    <div class="form-group">
      <label for="details">Details: </label>
      <input [(ngModel)]="childSelectedFood.details" class="form-control" type="text">
    </div>
    <div class="form-group">
      <label for="calories">Calories: </label>
      <input [(ngModel)]="childSelectedFood.calories" class="form-control" type="text">
    </div>
    <button class="btn form-buttons" (click)="finishEdit()">Finish</button>
  </div>
  `
})

export class EditFoodComponent {
  @Input() childSelectedFood: Food;
  @Output() clickSender = new EventEmitter();

  finishEdit() {
    this.clickSender.emit();
  }

}
