import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { switchMap, tap } from 'rxjs';
import { iHeroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css',
})
export class HeroeComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) {}

  heroe!: iHeroe;

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.heroesService.getHeroeId(id)),
        tap(console.log)
      )
      .subscribe((heroe) => {
        this.heroe = heroe
        console.log("mi heroe: ", heroe);
      });
  }
}
