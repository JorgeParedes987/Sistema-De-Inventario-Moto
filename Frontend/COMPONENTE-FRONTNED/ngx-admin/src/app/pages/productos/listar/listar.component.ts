import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Productos } from '../../../modelos/productos.model';
import { ProductosService } from '../../../servicios/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
 
  productos : Productos[];
  nombresColumnas: string[] = ['Codigo','Nombre','Descripcion','Cantidad','Precio','Opciones'];
  constructor(private miServicioProductos: ProductosService, private router: Router) { }

  ngOnInit(): void {
    console.log("Cargando init")
    this.listar();
  }
  listar(): void {
    this.miServicioProductos.listar().
      subscribe(data => {
        this.productos = data;
        console.log(this.productos)
      });
  }
  agregar(): void {
    console.log("agregando nuevo")
    this.router.navigate(["pages/productos/crear"]);
  }
  editar(id:string): void {
    console.log("editando a " + id)
    this.router.navigate(["pages/productos/actualizar/"+id]);
  }

  eliminar(id: string): void {
    Swal.fire({
      title: 'Eliminar Producto',
      text: "Está seguro que quiere eliminar el producto?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioProductos.eliminar(id).
          subscribe(data => {
            Swal.fire(
              'Eliminado!',
              'El producto ha sido eliminada correctamente',
              'success'
            )
            this.ngOnInit();
          });
      }
    })
  }
}
