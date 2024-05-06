import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { iHeroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

  constructor(private heroesService: HeroesService){}

  listaHeroes: iHeroe[] = [];


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.heroesService.buscarHeroe().subscribe({
      next: (heroes) => {
        this.listaHeroes = heroes;
      }
    })
  }

  clickPrueba(){
    console.log(this.listaHeroes);
  }


}
