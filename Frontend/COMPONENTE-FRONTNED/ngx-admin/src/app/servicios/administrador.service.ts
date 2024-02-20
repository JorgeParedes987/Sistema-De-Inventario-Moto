import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Administrador } from '../modelos/administrador.model';
import { Usuarios } from '../modelos/usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor(private http: HttpClient) { }
  listar(): Observable<Administrador[]> {
    return this.http.get<Administrador[]>(`${environment.url_gateway}/administradores`);
  }
  eliminar(id: string) {
    return this.http.delete<Administrador>(`${environment.url_gateway}/administradores/${id}`,);
  }
  getAdministrador(id: string): Observable<Administrador> {
    return this.http.get<Administrador>(`${environment.url_gateway}/administradores/${id}`);
  }
  crear(laAdministrador: Administrador) {
    return this.http.post(`${environment.url_gateway}/administradores`, laAdministrador);
  }
  editar(id:string,laAdministrador: Administrador) {
    return this.http.put(`${environment.url_gateway}/administradores/${id}`, laAdministrador);
  }
}