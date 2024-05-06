import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CanMatchFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs';


export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // if (authService.auth.id) {
  //   return true;
  // } else {
  //   console.log("Bloqueado por el canActivate, no estas logueado imbecil!  ");
  //   return false;
  // }

  return authService.verificarAutenticacion()
  .pipe(
    tap(
      estaAutenticado =>{
       if (!estaAutenticado) {
        router.navigate(['./auth/login']);
       } 
      }
    )
  )

};

export const canMatch: CanMatchFn = (route, segments) =>{

  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.verificarAutenticacion()
  .pipe(
    tap( estaAutenticado => {
      if (!estaAutenticado) {
        router.navigate(['./auth/login']);
      }
    })
  );
 
}
