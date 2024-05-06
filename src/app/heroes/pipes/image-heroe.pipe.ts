import { Pipe, PipeTransform } from '@angular/core';
import { iHeroe } from '../interfaces/heroe.interface';

@Pipe({
  name: 'imageHeroe'
})
export class ImageHeroePipe implements PipeTransform {
  

  transform(heroe:iHeroe): string {

    if (!heroe.id || heroe.alt_img === '') {
      console.log('aqui 1')
      return 'assets/no-image.png'
    }

    else if(heroe.alt_img){
      console.log('aqui 2')
      return heroe.alt_img;
    }

    console.log('aqui 4')
    return `assets/heroes/${heroe.id}.jpg`;
  }

}
