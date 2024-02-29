import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creatureTypePipe'
})
export class CreatureTypePipe implements PipeTransform {

  transform(type : string): string{

    let color : string;

    switch(type) {
      case 'Slime':
        color = 'lightgreen';
        break;
      case 'Demon':
        color = 'indigo';
        break;
      case 'Divin':
        color = 'gold';
        break;
      case 'Main':
        color = 'black'
        break;
      case 'Mort vivant':
        color = 'Teal'
        break;
      default:
        color = 'silver';
        break;
    }

    return color;
  }

}