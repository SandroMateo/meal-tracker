import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'food-filter',
  template: `
    <div *ngIf="childAverageCaloriesPerDay > 0">
      <h4>Filters</h4>
      <div class="form-group" (change)="calorieChange($event.target.value)">
        <div class="radio">
          <label><input type=radio name="calories" value="all" checked>
            All
          </label>
        </div>
        <div class="radio">
          <label><input type=radio name="calories" value="low">
            Low Calorie Food
          </label>
        </div>
        <div class="radio">
          <label><input type=radio name="calories" value="high">
            High Calorie Food
          </label>
        </div>
      </div>
    </div>
  `
})

export class FoodFilterComponent {
  @Output() clickSender = new EventEmitter();
  @Input() childAverageCaloriesPerDay: number;

  calorieChange(_calorieFilter: string) {
    this.clickSender.emit(_calorieFilter);
  }
}
