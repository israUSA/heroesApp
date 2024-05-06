import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { Observable, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = 'http://localhost:3000';
  private _auth: Auth|undefined;

  get auth(){
    return{...this._auth};
  }

  login(){
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`).pipe(
      tap(auth => this._auth = auth ),
      tap(auth => localStorage.setItem('id', auth.id) ),
    )
  }

  logout(){
    this._auth = undefined;
  }

  verificarAutenticacion():Observable<boolean>{
    if (!localStorage.getItem('id')) {
      return of(false);
    }

    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
    .pipe(
      map(auth => {
        this._auth = auth;
        return true;
      })
    )
  }
}
