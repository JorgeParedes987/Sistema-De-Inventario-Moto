import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Productos } from '../modelos/productos.model';
import { Usuarios } from '../modelos/usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  constructor(private http: HttpClient) { }

  listar(): Observable<Productos[]> {
    return this.http.get<Productos[]>(`${environment.url_gateway}/productos`);
    
  }
  eliminar(id:string): Observable<any> {
    return this.http.delete<Productos>(`${environment.url_gateway}/productos/${id}`,);
  }

getProductos(id: string): Observable<Productos> {
    return this.http.get<Productos>(`${environment.url_gateway}/productos/${id}`);
  }
  crear(elProductos: Productos) {
    return this.http.post(`${environment.url_gateway}/productos`,
elProductos);
  }
  editar(id:string, elProductos: Productos) {
    return this.http.put(`${environment.url_gateway}/productos/${id}`, 
elProductos);
  }
}