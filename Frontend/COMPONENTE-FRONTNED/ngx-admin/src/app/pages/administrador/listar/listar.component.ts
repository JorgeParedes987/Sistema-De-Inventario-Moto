import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Administrador } from '../../../modelos/administrador.model';
import { AdministradorService } from '../../../servicios/administrador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  administrador: Administrador[];
  nombresColumnas: string[] = ['Identificacion','Nombre','Telefono','Email','Opciones'];
  constructor(private miServicioAdministrador:  AdministradorService, private router: Router) { }

  ngOnInit(): void {
    this.listar();
    console.log("init administrador")
  }
  listar(): void {
    this.miServicioAdministrador.listar().
      subscribe(data => {

        this.administrador = data;
      });
  }
  agregar(): void {
    console.log("agregando nuevo")
    this.router.navigate(["pages/administradores/crear"]);
  }
  editar(id: string): void {
    console.log("editando a " + id)
    this.router.navigate(["pages/administradores/actualizar/"+id]);
  }

  eliminar(id: string): void {
    Swal.fire({
      title: 'Eliminar Administrador',
      text: "Está seguro que quiere eliminar el administrador?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miServicioAdministrador.eliminar(id).
          subscribe(data => {
            Swal.fire(
              'Eliminado!',
              'El Administrador ha sido eliminado correctamente',
              'success'
            )
            this.ngOnInit();
          });
      }
    })
  }
}
