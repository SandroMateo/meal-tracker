import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }   from './app.component';
import { NewFoodComponent }  from './new-food.component';
import { FoodListComponent } from './food-list.component';
import { FoodDisplayComponent } from './food-display.component';
import { EditFoodComponent } from './edit-food.component';
import { FoodFilterComponent } from './food-filter.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    NewFoodComponent,
    FoodListComponent,
    FoodDisplayComponent,
    EditFoodComponent,
    FoodFilterComponent,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
