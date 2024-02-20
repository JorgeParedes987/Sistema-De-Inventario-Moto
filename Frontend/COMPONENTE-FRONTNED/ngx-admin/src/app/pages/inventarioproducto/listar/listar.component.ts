import { Component, OnInit } from '@angular/core';
import { Inventarioproducto } from '../../../modelos/inventarioproducto.model';
import Swal from 'sweetalert2';
import { InventarioproductoService } from '../../../servicios/inventarioproducto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  inventarioproducto : Inventarioproducto[];
  id_inventario:string;
  nombresColumnas: string[] = ['Inventario ','Productos', 'Opciones'];
  constructor( private rutaActiva: ActivatedRoute,private miServicioInventarioproducto: InventarioproductoService, private router: Router) { }

  ngOnInit(): void {
    this.id_inventario = this.rutaActiva.snapshot.params.id_inventario;
    this.listar();
    console.log("init inventario")
  }
  listar():void{
     this.miServicioInventarioproducto.getInventarioproducto(this.id_inventario).
      subscribe (data => {
        console.log(data);
        this.inventarioproducto=data;

  });
  }
  agregar():void{
    console.log("agregando nuevo")
    this.router.navigate(["pages/inventarioproducto/crear/"+this.id_inventario]);
  }
  editar(id:string):void{
    console.log("editando a "+id)
    this.router.navigate(["pages/inventarioproducto/actualizar/"+id]);
  }
  eliminar(id:string):void{
   Swal.fire({
    title: 'Eliminar Inventario',
    text: "Está seguro que quiere eliminar el inventario-producto?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminar'
  }).then((result) => {
    if (result.isConfirmed) {
      this.miServicioInventarioproducto.eliminar(id)
        .subscribe(data => {
          Swal.fire(
           'Eliminado!',
           'El inventrio-producto ha sido eliminado correctamente',
           'success'
         )
         this.ngOnInit();
       });
    }
   })
  }

}
