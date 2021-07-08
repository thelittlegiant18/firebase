import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaEventoPageRoutingModule } from './lista-evento-routing.module';

import { ListaEventoPage } from './lista-evento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaEventoPageRoutingModule
  ],
  declarations: [ListaEventoPage]
})
export class ListaEventoPageModule {}
