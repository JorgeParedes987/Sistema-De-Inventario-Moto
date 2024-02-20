import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Inventario } from '../../../modelos/inventario.model';
import { InventarioService } from '../../../servicios/inventario.service';
import { Usuarios } from '../../../modelos/usuarios.model';


@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {
  modoCreacion: boolean = true;
  usuarios:Usuarios[];
  id_inventario: string = "";
  intentoEnvio: boolean = false;
  elInventario: Inventario = {
    nombre_inventario: "",
    fecha_inventario: "",
    usuario:""

  }
  constructor(private miServicioInventario: InventarioService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    this.listaru();
    if (this.rutaActiva.snapshot.params.id_inventarios) {
      
      this.modoCreacion = false;
      this.id_inventario = this.rutaActiva.snapshot.params.id_inventarios;
      console.log(this.id_inventario);
      this.getInventario(this.id_inventario)
    } else {
      this.modoCreacion = true;
    }
  }
  getInventario(id: string) {
    this.miServicioInventario.getInventario(id).
      subscribe(data => {
        this.elInventario = data;
      });
  }

  listaru():void{
    this.miServicioInventario.listaru().
    subscribe(data => {
      this.usuarios = data;
    });
  }

  agregar(): void {
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioInventario.crear(this.elInventario).
        subscribe(data => {
          Swal.fire(
            'Creado',
            'El inventario ha sido creado correctamente',
            'success'
          )
          this.router.navigate(["pages/inventarios/listar"]);
        });
    }
  }
  editar(): void {
    this.intentoEnvio = true;
    console.log(this.elInventario);
    if (this.validarDatosCompletos()) {
      this.miServicioInventario.editar(this.id_inventario,
        this.elInventario).
        subscribe(data => {
          Swal.fire(
            'Actualizado',
            'El inventario ha sido actualizado correctamente',
            'success'
          )
          this.router.navigate(["pages/inventarios/listar"]);
        });
    }
  }
  validarDatosCompletos(): boolean {
    this.intentoEnvio = true;
    if (this.elInventario.nombre_inventario == "" ||
      this.elInventario.fecha_inventario == "") {
      return false;
    } else {
      return true;
    }
  }
}