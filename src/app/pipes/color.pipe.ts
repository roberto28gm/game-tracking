import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorScore'
})
export class ColorScorePipe implements PipeTransform {

  transform(value: number): string {

    let color: string = '';

    if(!value){
      color = 'score-gray';
    } else {
      if(value < 50) {
        color = 'score-red';
      } else if (value >= 50 && value < 70) {
        color = 'score-yellow';
      } else if ( value >= 70 && value < 99) {
        color = 'score-green';
      } else {
        color = 'score-limegreen';
      }
    }

    return color;
  }

}
