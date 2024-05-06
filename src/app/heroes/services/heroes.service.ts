import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iHeroe } from '../interfaces/heroe.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }

  // private baseUrl:string = environment.baseUrl;
  private baseUrl:string = 'http://localhost:3000';

  buscarHeroe():Observable<iHeroe[]>{
    const url = `${this.baseUrl}/heroes`
    return this.http.get<iHeroe[]>(url);
  }

  getHeroeId(id:string):Observable<iHeroe>{
    const url = `${this.baseUrl}/heroes/${id}`
    return this.http.get<iHeroe>(url);
  }

  getSugerencias(termino:string):Observable<iHeroe[]>{

    const url = `${this.baseUrl}/heroes?q=${termino}&_limit=5`
    return this.http.get<iHeroe[]>(url);

  }

  agregarHeroe(heroe: iHeroe): Observable<iHeroe>{
    return this.http.post<iHeroe>(`${this.baseUrl}/heroes`, heroe);
  }
  
  actualizarHeroe(heroe:iHeroe): Observable<iHeroe>{
    return this.http.put<iHeroe>(`${this.baseUrl}/heroes/${heroe.id}`, heroe);
  }

  eliminarHeroe(heroe:iHeroe):Observable<iHeroe>{
    return this.http.delete<iHeroe>(`${this.baseUrl}/heroes/${heroe.id}`)
  }



}
