import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Inventario } from '../../../modelos/inventario.model';
import { InventarioService } from '../../../servicios/inventario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  inventarios : Inventario[];
  nombresColumnas: string[] = ['Nombre_Inventario','Fecha_Inventario','Usuario', 'Opciones'];
  constructor(private miServicioInventario: InventarioService, private router: Router) { }

  ngOnInit(): void {
    this.listar();
    console.log("init inventario")
  }
  listar():void{
     this.miServicioInventario.listar().
      subscribe (data => {

        this.inventarios=data;
  });
  }

  verInventario(id:string):void{
    this.router.navigate(["pages/inventarioproducto/listar/"+id]);
  }

  agregar():void{
    console.log("agregando nuevo")
    this.router.navigate(["pages/inventarios/crear"]);
  }
  editar(id:string):void{
    console.log("editando a "+id)
    this.router.navigate(["pages/inventarios/actualizar/"+id]);
  }
  eliminar(id:string):void{
   Swal.fire({
    title: 'Eliminar Inventario',
    text: "Está seguro que quiere eliminar el inventario?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminar'
  }).then((result) => {
    if (result.isConfirmed) {
      this.miServicioInventario.eliminar(id)
        .subscribe(data => {
          Swal.fire(
           'Eliminado!',
           'El inventrio ha sido eliminado correctamente',
           'success'
         )
         this.ngOnInit();
       });
    }
   })
  }
}