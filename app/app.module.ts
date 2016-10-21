import { NgModule }      from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { NewFoodComponent }  from './new-food.component';
import { FoodListComponent } from './food-list.component';
import { FoodDisplayComponent } from './food-display.component';


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
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
