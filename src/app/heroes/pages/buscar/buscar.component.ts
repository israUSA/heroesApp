import { Component } from '@angular/core';
import { iHeroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent {

  constructor(private heroesService: HeroesService){}

  termino:string = '';
  heroes: iHeroe[] = [];
  heroeSeleccionado!: iHeroe;

  buscando(){
    this.heroesService.getSugerencias(this.termino)
    .subscribe(heroes => this.heroes = heroes)
  
  }

  opcionSeleccionada(event:MatAutocompleteSelectedEvent ){

    if(event.option.value){
      console.log('No se encontro una mierda');
    }

    else{
      const heroe: iHeroe = event.option.value;
      this.termino = heroe.superhero;
      this.heroeSeleccionado = heroe;
      console.log(this.heroeSeleccionado);
    }
    
  }
}
