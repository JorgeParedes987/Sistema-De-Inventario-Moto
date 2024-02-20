import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Inventarioproducto } from '../modelos/inventarioproducto.model';
import { Usuarios } from '../modelos/usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class InventarioproductoService {

  constructor(private http: HttpClient) { }
  listar(): Observable<Inventarioproducto[]> {
    return this.http.get<Inventarioproducto[]>(`${environment.url_gateway}/inventarioproducto`);
}
eliminar(id:string): Observable<any> {
    return this.http.delete<Inventarioproducto>(`${environment.url_gateway}/inventarioproducto/${id}`,);
}
getInventarioproducto(id: string): Observable<Inventarioproducto[]> {
  return this.http.get<Inventarioproducto[]>(`${environment.url_gateway}/inventarioproducto/${id}`);
}
crear(elInventarioproducto: Inventarioproducto) {
  return this.http.post(`${environment.url_gateway}/inventarioproducto`, elInventarioproducto);
}
editar(id:string,elInventarioproducto: Inventarioproducto) {
  return this.http.put(`${environment.url_gateway}/inventarioproducto/${id}`, elInventarioproducto);
}
}
