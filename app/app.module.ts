import { NgModule }      from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { NewFoodModule }  from './new-food.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    NewFoodModule,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
