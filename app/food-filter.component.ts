import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'food-filter',
  template: `
    <h4>Filters</h4>
    <div class="form-group" (change)="calorieChanges($event.target.value)">
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
  `
})

export class FoodFilterComponent {
  @Output() clickSender = new EventEmitter();

  calorieChange(_calorieFilter: string) {
    this.clickSender.emit(_calorieFilter);
  }
}
