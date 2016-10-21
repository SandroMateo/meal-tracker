import { Pipe, PipeTransform } from '@angular/core';
import { Food } from './food.model'

@Pipe({
  name: 'dates',
  pure: false
})

export class DatesPipe implements PipeTransform {
  transform(input: Food[], desiredDate) {
    var output: Food[] = [];
    for(var i = 0; i < input.length; i++) {
      if(input[i].dateLogged == desiredDate) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
