import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioproductoRoutingModule } from './inventarioproducto-routing.module';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { NbCardModule, NbSelectModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent
  ],
  imports: [
    CommonModule,
    InventarioproductoRoutingModule,
    NbCardModule,
    NbSelectModule,
    FormsModule
  ]
})
export class InventarioproductoModule { }
