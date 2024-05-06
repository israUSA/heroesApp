import { Component, Input } from '@angular/core';
import { iHeroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrl: './heroe-tarjeta.component.css'
})
export class HeroeTarjetaComponent {

  @Input() heroe!: iHeroe;

}
