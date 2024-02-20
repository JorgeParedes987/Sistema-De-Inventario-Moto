import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Administrador } from '../../../modelos/administrador.model';
import { AdministradorService } from '../../../servicios/administrador.service';

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  modoCreacion: boolean = true;
  id_administrador: string = "";
  intentoEnvio: boolean = false;
  laAdministrador: Administrador = {
    identificacion: "",
    nombre: "",
    telefono: "",
    email: ""
  }
  constructor(private miServicioAdministrador: AdministradorService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id_administradores) {
      this.modoCreacion = false;
      this.id_administrador = this.rutaActiva.snapshot.params.id_administradores;
      this.getAdministrador(this.id_administrador)
    } else {
      this.modoCreacion = true;
    }
  }
  getAdministrador (id: string) {
    this.miServicioAdministrador.getAdministrador(id).
      subscribe(data => {
        this.laAdministrador = data;
      });
  }

  agregar(): void {
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioAdministrador.crear(this.laAdministrador).
        subscribe(data => {
          Swal.fire(
            'Creado',
            'El administrador ha sido creado correctamente',
            'success'
          )
          this.router.navigate(["pages/administradores/listar"]);
        });
    }
  }
  editar(): void {
    this.intentoEnvio = true;
    if (this.validarDatosCompletos()) {
      this.miServicioAdministrador.editar(this.laAdministrador._id, this.laAdministrador).
        subscribe(data => {
          Swal.fire(
            'Actualizado',
            'El administrador ha sido actualizado correctamente',
            'success'
          )
          this.router.navigate(["pages/administradores/listar"]);
        });
    }
  }
  validarDatosCompletos(): boolean {
    this.intentoEnvio = true;
    if (this.laAdministrador.identificacion == "" ||
      this.laAdministrador.nombre == "" ||
      this.laAdministrador.telefono == "" ||
      this.laAdministrador.email == "") {
      return false;
      }else{
      return true;
    }
  }
}
