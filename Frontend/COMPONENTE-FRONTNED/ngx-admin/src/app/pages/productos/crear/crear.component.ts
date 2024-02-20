import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Productos } from '../../../modelos/productos.model';
import { ProductosService } from '../../../servicios/productos.service';


@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  modoCreacion: boolean = true;
  id_productos: string = "";
  intentoEnvio: boolean = false;
  elProductos: Productos = {
    codigo: "",
    nombre: "",
    descripcion: "",
    cantidad: "",
    precio: ""

}

  constructor(private miServicioProductos: ProductosService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id_productos) {
      this.modoCreacion = false;
      this.id_productos = this.rutaActiva.snapshot.params.id_productos;
      this.getProductos(this.id_productos)
    } else {
      this.modoCreacion = true;
    }
  }
  getProductos(id: string) {
    this.miServicioProductos.getProductos(id). subscribe(data => {
        this.elProductos = data;
      });
  }
  agregar(): void {
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioProductos.crear(this.elProductos).
        subscribe(data => {
          Swal.fire(
            'Creado',
            'El producto ha sido creado correctamente',
            'success'
          )
          this.router.navigate(["pages/productos/listar"]);
        });
    }
  }
  editar(): void {
    this.intentoEnvio = true;
    if (this.validarDatosCompletos()) {
      this.miServicioProductos.editar(this.elProductos._id, this.elProductos).
        subscribe(data => {
          Swal.fire(
            'Actualizado',
            'El Producto ha sido actualizado correctamente',
            'success'
          )
          this.router.navigate(["pages/productos/listar"]);
       });
     }
  }
  validarDatosCompletos(): boolean {
    this.intentoEnvio = true;
    if (this.elProductos.nombre =="" ||
     this.elProductos.codigo =="" ||
     this.elProductos.descripcion =="" ||
     this.elProductos.cantidad =="" ||
     this.elProductos.precio ==""){
     return false;
    }else{
     return true;
    }
  }
}