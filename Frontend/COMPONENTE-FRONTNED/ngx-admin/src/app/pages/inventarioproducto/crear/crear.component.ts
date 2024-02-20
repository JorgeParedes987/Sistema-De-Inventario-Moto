import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Inventarioproducto } from '../../../modelos/inventarioproducto.model';
import { InventarioService } from '../../../servicios/inventario.service';
import { ProductosService } from '../../../servicios/productos.service';
import { Productos } from '../../../modelos/productos.model';
import { InventarioproductoService } from '../../../servicios/inventarioproducto.service';

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {
  productos:Productos[];
  selectedProduct:string;
  modoCreacion: boolean = true;
  id_inventarioproducto: string = "";
  id_inventario:string;
  intentoEnvio: boolean = false;
  elInventarioProducto: Inventarioproducto = {
    inventario: "",
    producto: ""

  }
  constructor(private miServicioInventarioProducto: InventarioproductoService,private miServicioProducto: ProductosService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    this.id_inventario=this.rutaActiva.snapshot.params.id_inventario;
    this.listarProductos();
    // if (this.rutaActiva.snapshot.params.id_inventarioproducto) {
    //   this.modoCreacion = false;
    //   this.id_inventarioproducto = this.rutaActiva.snapshot.params.id_inventarioproducto;
    //   this.getInventario(this.id_inventarioproducto)
    // } else {
    //   this.modoCreacion = true;
    // }
  }
  

  listarProductos():void{
    this.miServicioProducto.listar().
      subscribe(data => {
        this.productos = data;
        console.log(this.productos);
      });

  }


  agregar(): void {
    //if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.elInventarioProducto.inventario=this.id_inventario;
      this.elInventarioProducto.producto=this.selectedProduct;
      console.log(this.elInventarioProducto)
      this.miServicioInventarioProducto.crear(this.elInventarioProducto).
        subscribe(data => {
          Swal.fire(
            'Creado',
            'El producto ha sido creado correctamente',
            'success'
          )
          this.router.navigate(["pages/inventarioproducto/listar/"+this.id_inventario]);
        });
    //}
  }
 
}
