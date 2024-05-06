import { Component } from '@angular/core';
import { Publisher, iHeroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css',
})
export class AgregarComponent {
  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('editar')) {
      return;
    }

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroesService.getHeroeId(id)))
      .subscribe((heroe) => (this.heroe = heroe));
  }

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics',
    },
  ];

  heroe: iHeroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  };

  guardar(): void {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    if (this.heroe.id) {
      //Actualizar
      this.heroesService
        .actualizarHeroe(this.heroe)
        .subscribe((heroe) =>
          this.mostrarSnackbar(
            `El heroe ${heroe.superhero} ha sido actualizado`
          )
        );
    } else {
      //Crear
      this.heroesService.agregarHeroe(this.heroe).subscribe((heroe) => {
        this.mostrarSnackbar(`${heroe.superhero} ha sido agregado`);
        this.router.navigate(['/heroe', heroe.id]);
      });
    }
  }

  eliminar(): void {
    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250px',
      data: { ...this.heroe },
    });

    dialog.afterClosed().subscribe((result) => {
      if (result) {
        this.heroesService.eliminarHeroe(this.heroe).subscribe((heroe) => {
          this.router.navigate(['/heroe/listado']);
        });
      }
    });
  }

  mostrarSnackbar(mensaje: string): void {
    this.snackbar.open(mensaje, 'ok!', {
      duration: 5000,
    });
  }
}
